import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Home from './Hero'

describe('Home', () => {
  describe('When Home page is rendered', () => {
    it('renders the home page sections', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      expect(screen.getByText(/Premium Quality Potatoes/i)).toBeInTheDocument()
    })
  })
})
