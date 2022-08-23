import { screen } from '@testing-library/react'

const caseRegex =
  /the task "([^"]+)" (disappears|appears) (?:from|in) the list of (pending|completed) tasks/

const caseHandler = (ctx) => async (taskName, action, listName) => {
  if (action === 'disappears') {
    expect(await screen.findByText(ctx.tasks[taskName])).not.toBeInTheDocument()
  } else {
    expect(await screen.findByText(ctx.tasks[taskName])).toBeInTheDocument()
  }
}

export const thenTaskIsInTaskList = (ctx) => {
  ctx.$operators.then(caseRegex, caseHandler(ctx))
}

export const andTaskIsInTaskList = (ctx) => {
  ctx.$operators.and(caseRegex, caseHandler(ctx))
}
