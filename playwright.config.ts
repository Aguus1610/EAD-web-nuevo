import { defineConfig, devices } from '@playwright/test'

const baseURL = 'http://127.0.0.1:4321/EAD-web-nuevo/'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  reporter: 'line',
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chromium',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4321',
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
