import { vi } from 'vitest'

export const mockTranslations = () => {
  return vi.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str: string) => str,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        i18n: { changeLanguage: () => new Promise(() => {}) },
      }
    },
  }))
}
