import { Train } from './Stack'

export interface FieldProps {
  children: React.ReactNode
  label: string
}

export const Field = ({ children, label }: FieldProps) => {
  return (
    <Train spacing="small" wrap={false}>
      <div className="font-medium">{label}: </div>
      <div>{children}</div>
    </Train>
  )
}
