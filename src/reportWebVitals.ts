import { ReportCallback } from 'web-vitals'

const reportWebVitals = (onPerfEntry: ReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry)
        onFID(onPerfEntry)
        onFCP(onPerfEntry)
        onLCP(onPerfEntry)
        onTTFB(onPerfEntry)
      })
      .catch((error) => {
        console.error('Error logging web vitals', error)
        console.info(
          'If you would like to help improve this project, please consider disabling ad blockers and/or upgrading your browser to the latest version.',
        )
      })
  }
}

export default reportWebVitals
