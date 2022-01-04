import 'twin.macro'
import { Train } from './stack'

export interface FieldProps {
  children: React.ReactNode
  label: string
}

export const Field = ({ children, label }: FieldProps) => {
  return (
    <Train spacing="small" wrap={false}>
      <div tw="font-medium">{label}: </div>
      <div>{children}</div>
    </Train>
  )
}
