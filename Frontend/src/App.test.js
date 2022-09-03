import { render, screen } from '@testing-library/react'
import App from './App'
import { AlertProvider } from './components/alert'

test('renders the footer text', () => {
  render(
    <AlertProvider>
      <App />
    </AlertProvider>
  )
  const footerElement = screen.getByText(/clearpoint.digital/i)
  expect(footerElement).toBeInTheDocument()
})