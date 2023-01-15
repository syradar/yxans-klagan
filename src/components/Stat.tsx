type StatValueSize = 'small' | 'medium' | 'large'

export interface StatProps {
  children: React.ReactNode
  label: string
  size?: StatValueSize
  flexGreedy?: boolean
}

export const Stat = ({
  children,
  label,
  size = 'medium',
  flexGreedy = false,
}: StatProps) => (
  <div className="text-center">
    <div
      className={`
    font-medium leading-none
    ${size === 'small' ? 'text-base' : ''}
    ${size === 'medium' ? 'text-lg' : ''}
    ${size === 'large' ? 'text-2xl' : ''}
    ${flexGreedy ? 'flex-auto' : ''}
    `}
    >
      {children}
    </div>
    <div className="text-sm">{label}</div>
  </div>
)
