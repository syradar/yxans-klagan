type LabelProps = {
  children: React.ReactNode
}
export const Label = ({ children }: LabelProps) => (
  <label className="mb-2 block text-sm font-semibold">{children}</label>
)
