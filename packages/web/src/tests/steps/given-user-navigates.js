import { render, screen } from '@testing-library/react'

import App from '../../App'

const caseRegex = /a user navigates to the "([^"]+)" (form)/

export const givenUserNavigates = (ctx) => {
  const caseHandler = async (itemName, itemType) => {
    ctx.component = render(<App />, {})

    expect(
      await screen.getByRole(itemType, { name: itemName })
    ).toBeInTheDocument()
  }

  ctx.$operators.given(caseRegex, caseHandler)
}
