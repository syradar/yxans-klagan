import tw, { styled } from 'twin.macro'

export interface CardProps {
  children: React.ReactNode
  thin?: boolean
}

export const Card = styled.div(({ thin = false }: CardProps) => [
  tw`bg-gray-200 rounded`,
  thin ? tw`px-4 py-2` : tw`p-4`,
])
