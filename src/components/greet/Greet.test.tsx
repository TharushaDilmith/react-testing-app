/**
 * Gret should render the text "Hello" and if name is passed, it should render "Hello, {name}"
 */

import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet', () => {
  it('should render Hello as a text', () => {
    render(<Greet />)
    const element = screen.getByText(/Hello,/)
    expect(element).toBeInTheDocument()
  })

})
