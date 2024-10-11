import { expect, test } from 'vitest'
import { getByRole, render, screen } from '@testing-library/react'
import Home from '../app/page'
 
test('スタートページに"Get started by editing"という文字が表示される', () => {
  render(<Home />)
  expect(screen.getByText('Get started by editing')).toBeDefined()
})