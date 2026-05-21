import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home />)

    expect(screen.getByText(/Get started/i)).toBeInTheDocument()
  })
})