import { screen } from '@testing-library/react'

const caseRegex = /a user has a task "([^"]+)"/

const caseHandler = async (itemName, itemType) => {
  expect(
    await screen.getByRole(itemType, { name: itemName })
  ).toBeInTheDocument()
}

export const givenUserHasTask = (ctx) => {
  ctx.$operators.given(caseRegex, caseHandler)
}
