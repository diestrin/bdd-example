import { screen } from '@testing-library/react'

const caseRegex = /a user navigates to the "([^"]+)" (form)/

const caseHandler = async (itemName, itemType) => {
  expect(
    await screen.getByRole(itemType, { name: itemName })
  ).toBeInTheDocument()
}

export const givenUserNavigates = (ctx) => {
  ctx.$operators.given(caseRegex, caseHandler)
}
