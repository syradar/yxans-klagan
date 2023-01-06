type Spacing = 'normal' | 'small' | 'none'
const spacings = {
  none: `gap-0`,
  small: `gap-2`,
  normal: `gap-4`,
} as const

export interface StackProps {
  children: React.ReactNode
  dir?: 'vertical' | 'horizontal'
  wrap?: boolean
  distribute?: boolean
  spacing?: Spacing
  full?: boolean
}

export type PancakeProps = Omit<StackProps, 'dir'>
export type TrainProps = Omit<StackProps, 'dir'>

export const Stack = ({
  children,
  dir = 'horizontal',
  wrap = true,
  distribute = false,
  spacing = 'normal',
  full = false,
}: StackProps) => {
  return (
    <div
      className={`flex
        ${full ? 'w-full' : ''}
        ${wrap ? 'flex-wrap' : ''}
        ${dir === 'horizontal' ? 'flex-row' : 'flex-col'}
        ${distribute ? 'justify-between' : ''}
        ${spacings[spacing]}
      `}
    >
      {children}
    </div>
  )
}

export const Pancake = ({
  children,
  wrap,
  distribute,
  spacing,
}: PancakeProps) => (
  <Stack dir="vertical" wrap={wrap} distribute={distribute} spacing={spacing}>
    {children}
  </Stack>
)

export const Train = ({ children, wrap, distribute, spacing }: TrainProps) => (
  <Stack dir="horizontal" wrap={wrap} distribute={distribute} spacing={spacing}>
    {children}
  </Stack>
)

export interface GridProps {
  children: React.ReactNode
  cols?: '1' | '2' | '3' | '4' | '5'
  spacing?: Spacing
}

export const Grid = ({
  children,
  cols = '1',
  spacing = 'normal',
}: GridProps) => (
  <div
    className={`grid
      ${cols === '1' ? 'grid-cols-1' : ''}
      ${cols === '2' ? 'grid-cols-2' : ''}
      ${cols === '3' ? 'grid-cols-3' : ''}
      ${cols === '4' ? 'grid-cols-4' : ''}
      ${cols === '5' ? 'grid-cols-5' : ''}
      ${spacings[spacing]}
`}
  >
    {children}
  </div>
)

Stack.Vertical = Pancake
Stack.Horizontal = Train
export default Stack
