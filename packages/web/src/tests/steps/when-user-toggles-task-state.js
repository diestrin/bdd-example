import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const caseRegex =
  /the user clicks the toggle button to mark the task "([^"]+)" as "([^"]+)"/

const caseHandler = (ctx) => async (taskName, taskStatus) => {
  await userEvent.click(
    await screen.getByRole('checkbox', { name: 'TaskToggle' })
  )
}

export const whenUserTogglesTaskState = (ctx) => {
  ctx.$operators.when(caseRegex, caseHandler(ctx))
}
