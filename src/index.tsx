import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18nReact from './i18n'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <I18nextProvider i18n={i18nReact}>
      <Suspense fallback={'Loading...'}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
