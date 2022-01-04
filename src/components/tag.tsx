import tw, { styled } from 'twin.macro'

export const Tag = styled.div(() => [
  // The common button styles
  tw`px-1 py-0.5`,
  tw`border-[1px] border-gray-300 rounded-md`,

  // Use props to conditionally style your components
  tw` text-gray-600 text-sm font-medium`,

  // The theme import can supply values from your tailwind.config.js
  // css`
  //   color: ${theme`colors.black`};
  // `,
])
