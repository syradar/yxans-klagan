import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import App from './App'
import './App.css'
import i18nReact from './i18nReact'
import { consoleLogo } from './console-logo'
import { webVitals } from './vitals'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <I18nextProvider i18n={i18nReact}>
      <Suspense fallback={'Loading...'}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </I18nextProvider>
  </StrictMode>,
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}

let analyticsId = 'DEBUG'
try {
  analyticsId = import.meta.env.VERCEL_ANALYTICS_ID ?? 'DEBUG'
} catch (error) {
  console.error(error)
}

if (analyticsId) {
  webVitals({
    analyticsId,
    path: window.location.pathname,
    params: { href: window.location.href },
    debug: analyticsId === 'DEBUG',
  })
}

consoleLogo()
