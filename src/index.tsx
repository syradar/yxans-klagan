import App from './App'
import './App.css'
import 'tailwindcss/tailwind.css'
import { HashRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18nReact from './i18nReact'
import { createRoot } from 'react-dom/client'
import { StrictMode, Suspense } from 'react'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <I18nextProvider i18n={i18nReact}>
      <Suspense fallback={'Loading...'}>
        <HashRouter
          basename={
            process.env.NODE_ENV === 'production' ? '/yxans-klagan' : ''
          }
        >
          <App />
        </HashRouter>
      </Suspense>
    </I18nextProvider>
  </StrictMode>,
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
