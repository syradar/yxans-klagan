export type FeatureFlag = {
  name: string
  description: string
  enabled: boolean
}

export const featureFlags = {
  stronghold: {
    name: 'stronghold',
    description: 'Manage and track your stronghold',
    enabled: false,
  },
} as const

type FeatureFlagKey = keyof typeof featureFlags

export const isFeatureEnabled = (name: FeatureFlagKey): boolean => {
  const flag = featureFlags[name]

  if (process.env.NODE_ENV === 'development') {
    return true
  }

  return flag.enabled
}
