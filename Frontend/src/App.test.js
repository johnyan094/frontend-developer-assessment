import { render, screen } from '@testing-library/react'
import App from './App'
import { AlertProvider } from './components/alert'
import userEvent from '@testing-library/user-event'

test('renders the footer text', () => {
  render(
    <AlertProvider>
      <App />
    </AlertProvider>
  )
  const footerElement = screen.getByText(/clearpoint.digital/i)
  expect(footerElement).toBeInTheDocument()
})

test('clear description', () => {
  render(
    <AlertProvider>
      <App />
    </AlertProvider>
  )

  // arrange
  const descriptionValueElement = screen.getByPlaceholderText('Enter description...')
  userEvent.type(descriptionValueElement, 'item 1')

  const clearButton = screen.getByRole('button', {
    name: /clear/i,
  })

  // act
  expect(descriptionValueElement).toHaveValue('item 1')
  userEvent.click(clearButton)
  expect(descriptionValueElement).toHaveValue('')
})
