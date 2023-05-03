export const validLanguages = ['en', 'sv'] as const
export type ValidLanguage = (typeof validLanguages)[number]
