import { test, expect } from '@playwright/test'

test('display page test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/自慢したっター/)
  await expect(page.getByRole('heading')).toHaveText(/自慢したっター/)
  await expect(page.getByRole('button', {name: /自慢したい/})).toBeVisible()
})

test('go to boast', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  // Expect a title "to contain" a substring.
  await page.getByRole('link', {name: '自慢されたい'}).click()
  await expect(page).toHaveURL('http://localhost:3000/boast')
})