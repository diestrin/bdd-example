import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const caseRegex = /the user submits the form/

const caseHandler = async () => {
  await userEvent.click(await screen.getByRole('button', { name: 'Add todo' }))
}

export const whenUserSubmitsForm = (ctx) => {
  ctx.$operators.when(caseRegex, caseHandler)
}

export const andUserSubmitsForm = (ctx) => {
  ctx.$operators.and(caseRegex, caseHandler)
}
