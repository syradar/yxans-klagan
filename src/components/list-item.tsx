import React, { ReactNode } from 'react'
import tw, { styled } from 'twin.macro'

interface ListItemButtonProps {
  children: ReactNode
  onClick?: () => void
}

export const ListButton = styled.button([
  // The common button styles
  tw`px-4 py-2 select-none focus:outline-none w-full`,
  tw`rounded-none`,
  // Use the variant grouping feature to add variants to multiple classes
  tw`pointer-fine:hover:(bg-red-500 border-red-500) `,

  // Use props to conditionally style your components
  tw`bg-white text-black`,

  // Conditional props can be added
  tw`text-sm text-left`,

  // The theme import can supply values from your tailwind.config.js
  // css`
  //   color: ${theme`colors.black`};
  // `,
])

export const ListItemButton = ({ children, onClick }: ListItemButtonProps) => (
  <ListButton onClick={onClick}>{children}</ListButton>
)
