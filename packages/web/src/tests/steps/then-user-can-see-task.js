import { screen } from '@testing-library/react'

const caseRegex = /the user can see the task "([^"]+)" in the task list/

export const thenUserCanSeeTask = (ctx) => {
  const caseHandler = async (taskName) => {
    expect(await screen.findByText(ctx.tasks[taskName])).toBeInTheDocument()
  }

  ctx.$operators.then(caseRegex, caseHandler)
}
