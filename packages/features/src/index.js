import { join, resolve } from 'path'
import { Pact } from '@pact-foundation/pact'
import { loadFeature as _loadFeature, defineFeature } from 'jest-cucumber'

export const storyRegex = /(A\d+)\/(T\d+)\/(S\d+)/
export const userStoryId =
  ((
    process.argv.find((arg) => storyRegex.test(arg)) ||
    process.env.USER_STORY_ID ||
    ''
  ).match(storyRegex) || [])[0] || ''
console.log('USER_STORY_ID', userStoryId)

const consumer = process.env.PACT_CONSUMER || 'consumer'
console.log('PACT_CONSUMER', consumer)

const provider = process.env.PACT_PROVIDER || 'provider'
console.log('PACT_PROVIDER', provider)

const pactFolder =
  process.env.PACT_FOLDER ||
  resolve(__dirname, '../pacts', userStoryId ? `features/${userStoryId}` : '')
console.log('PACT_FOLDER', pactFolder)

export const pact = new Pact({
  port: 1337,
  dir: pactFolder,
  consumer,
  provider,
})

export { defineFeature, DefineStepFunction } from 'jest-cucumber'
export { Matchers, GraphQLInteraction } from '@pact-foundation/pact'

export const loadFeature = (feature, options) => {
  return _loadFeature(
    join(__dirname, '../../features', `${feature}.feature`),
    options
  )
}

export const define = (story, options) => {
  if (!story.id) {
    throw new Error('Cannot run test without story id')
  }

  const feature = loadFeature(story.id, options)

  if (!Object.keys(story.rules).length) {
    return
  }

  defineFeature(feature, (test) => {
    let ruleIds = Object.keys(story.rules).filter((r) => story.rules[r].only)
    ruleIds = ruleIds.length
      ? ruleIds
      : Object.keys(story.rules).filter((r) => !story.rules[r].skip)
    const rules = ruleIds.reduce(
      (result, r) => ({ ...result, [r]: story.rules[r] }),
      {}
    )

    for (let ruleId in rules) {
      const rule = story.rules[ruleId]

      let exampleIds = Object.keys(rule.examples).filter(
        (e) => rule.examples[e].only
      )
      exampleIds = exampleIds.length
        ? exampleIds
        : Object.keys(rule.examples).filter((e) => !rule.examples[e].skip)
      const examples = exampleIds.reduce(
        (result, e) => ({ ...result, [e]: rule.examples[e] }),
        {}
      )

      for (let exampleId in examples) {
        const example = rule.examples[exampleId]

        test(`(${ruleId}.${exampleId}) ${example.title}`, (operators) => {
          // Get a new context for each test
          let testContext = {
            $id: `${story.id.replace(/\//g, '.')}.${ruleId}.${exampleId}`,
            $pact: pact,
            $operators: operators,
          }

          if (example.context) {
            testContext = example.context(testContext)
          }

          beforeAll(async () => {
            example.beforeAll && (await example.beforeAll())
            await pact.setup()
          })
          example.beforeEach && beforeEach(example.beforeEach)
          afterEach(async () => {
            example.afterEach && (await example.afterEach())
            await pact.finalize()
          })
          afterAll(async () => {
            example.afterAll && (await example.afterAll())
            await pact.verify()
          })

          for (let step of example.steps) {
            step(testContext)
          }
        })
      }
    }
  })
}

export const runSuite = (stories, options) => {
  let run = false

  for (let story of stories) {
    if (userStoryId && userStoryId !== story.id) {
      continue
    }

    run = true
    define(story, options)

    if (userStoryId) {
      break
    }
  }

  if (!run && userStoryId) {
    throw new Error(
      `Expected test to run at least one story, but none found with ${userStoryId}`
    )
  }
}
