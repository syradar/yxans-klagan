import tw, { styled } from 'twin.macro'

export interface CardProps {
  children: React.ReactNode
  thin?: boolean
  subtle?: boolean
}

export const Card = styled.div(
  ({ thin = false, subtle = false }: CardProps) => [
    tw`rounded`,
    subtle ? tw`border border-gray-400` : tw`bg-gray-200`,
    thin ? tw`px-4 py-2` : tw`p-4`,
  ],
)
