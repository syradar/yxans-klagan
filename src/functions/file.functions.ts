export const downloadFile = <T extends Record<string, unknown>>(
  data: T,
  fileName: string,
): void => {
  const blob = new Blob([JSON.stringify(data, undefined, 2)])
  const url = URL.createObjectURL(blob)

  const dla = document.createElement('a')
  dla.setAttribute(
    'style',
    'display: none; position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;',
  )
  dla.href = url
  dla.download = `${fileName}.json`
  dla.click()
}
