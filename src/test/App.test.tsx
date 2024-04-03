import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('My App works as expected', async () => {
  const app = render(<App />)
  const textareaFrom = app.getByPlaceholderText('Introducir texto')

  await userEvent.type(textareaFrom, 'Hola mundo')
  const result = await app.findByDisplayValue(
    /Hello world/i,
    {},
    { timeout: 5000 }
  )
  expect(result).toBeTruthy()
})
