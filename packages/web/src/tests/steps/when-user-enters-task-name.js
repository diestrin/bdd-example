import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const caseRegex = /the user enters the task name "([^"]+)"/

export const whenUserEntersTaskName = (ctx) => {
  const caseHandler = async (taskName) => {
    ctx.tasks = {
      [taskName]: `${taskName} #${Math.round(Math.random() * 10000)}`,
    }
    await userEvent.type(
      await screen.getByRole('textbox', { name: 'TodoInput' }),
      ctx.tasks[taskName]
    )
  }
  ctx.$operators.when(caseRegex, caseHandler)
}
