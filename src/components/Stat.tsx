type StatValueSize = 'small' | 'medium' | 'large'

export interface StatProps {
  children: React.ReactNode
  label: string
  size?: StatValueSize
}

export const Stat = ({ children, label, size = 'medium' }: StatProps) => (
  <div className="text-center">
    <div
      className={`
    font-medium leading-none
    ${size === 'small' ? 'text-base' : ''}
    ${size === 'medium' ? 'text-lg' : ''}
    ${size === 'large' ? 'text-2xl' : ''}
    `}
    >
      {children}
    </div>
    <div className="text-sm">{label}</div>
  </div>
)
