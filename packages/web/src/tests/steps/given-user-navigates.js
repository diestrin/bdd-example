import { render, screen, waitFor } from '@testing-library/react'

import { Matchers, GraphQLInteraction } from 'features'
import App from '../../App'
// import { mockApiUrl } from '../../lib/api'
import { QUERY_ALL_TASKS } from '../../data/queries'

const { eachLike } = Matchers

const caseRegex = /a user navigates to the "([^"]+)" (form)/

export const givenUserNavigates = (ctx) => {
  const caseHandler = async (itemName, itemType) => {
    ctx.$pact.addInteraction(
      new GraphQLInteraction()
        // .given('a new user')
        .uponReceiving(`a requests for tasks (id:${ctx.id})`)
        .withRequest({
          method: 'POST',
          path: '/graphql',
        })
        .withQuery(QUERY_ALL_TASKS)
        .willRespondWith({
          body: {
            data: {
              tasks: eachLike({}),
            },
          },
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        })
    )

    ctx.component = render(<App />, {})

    expect(
      await screen.getByRole(itemType, { name: itemName })
    ).toBeInTheDocument()
  }

  ctx.$operators.given(caseRegex, caseHandler)
}
