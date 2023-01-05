export type CardProps = {
  children: React.ReactNode
  thin?: boolean
  subtle?: boolean
  extraCss?: string
}

export const Card = ({ children, subtle, thin, extraCss }: CardProps) => (
  <div
    className={`
  rounded
  ${subtle ? 'border border-gray-400' : 'bg-gray-200'}
  ${thin ? 'px-4 py-2' : 'p-4'}
  ${extraCss}
  `}
  >
    {children}
  </div>
)
