import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import App from './App'
import './App.css'
import { consoleLogo } from './console-logo'
import { store } from './store/store'
import { webVitals } from './vitals'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={'Loading...'}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </StrictMode>,
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}

// Vercel Web Vitals
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

// Vercel Audience Analytics
import('@vercel/analytics')
  .then(({ inject }) => {
    inject()
  })
  .catch((err) => {
    console.error('[Analytics]', err)
  })

consoleLogo()
