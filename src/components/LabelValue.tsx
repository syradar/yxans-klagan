interface LabelValueProps {
  label: string
  children: React.ReactNode
}
export const LabelValue = ({ children, label }: LabelValueProps) => {
  return (
    <div>
      <div className="text-sm">{label}</div>
      <div className="font-medium">{children}</div>
    </div>
  )
}
