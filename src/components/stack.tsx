import tw, { styled, TwStyle } from 'twin.macro'

type Spacing = 'normal' | 'small' | 'none'
const spacings: { [S in Spacing]: TwStyle } = {
  none: tw`gap-0`,
  small: tw`gap-2`,
  normal: tw`gap-4`,
}
const getSpacing = (space: Spacing) => spacings[space]

export interface StackProps {
  children: React.ReactNode
  dir?: 'vertical' | 'horizontal'
  wrap?: boolean
  distribute?: boolean
  spacing?: Spacing
}

export type PancakeProps = Omit<StackProps, 'dir'>
export type TrainProps = Omit<StackProps, 'dir'>

export const Stack = ({
  children,
  dir = 'horizontal',
  wrap = true,
  distribute = false,
  spacing = 'normal',
}: StackProps) => {
  return (
    <div
      tw="flex"
      css={[
        tw`flex w-full`,

        wrap && tw`flex-wrap`,

        dir === 'horizontal' ? tw`flex-row` : tw`flex-col`,

        distribute && tw`justify-between`,

        spacing === 'normal' && tw`gap-4`,
        spacing === 'small' && tw`gap-2`,
        spacing === 'none' && tw`gap-0`,
      ]}
    >
      {children}
    </div>
  )
}

export const Pancake2 = tw(Stack)`flex-col`

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

export const Grid = styled.div(
  ({ cols = '1', spacing = 'normal' }: GridProps) => [
    tw`grid`,
    cols === '1' && tw`grid-cols-1`,
    cols === '2' && tw`grid-cols-2`,
    cols === '3' && tw`grid-cols-3`,
    cols === '4' && tw`grid-cols-4`,
    cols === '5' && tw`grid-cols-5`,
    getSpacing(spacing),
  ],
)
