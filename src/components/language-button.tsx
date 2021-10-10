import tw, { styled } from 'twin.macro'

interface LanguageButtonProps {
  selected?: boolean
}

export const LanguageButton = styled.button(
  ({ selected }: LanguageButtonProps) => [
    // The common button styles
    tw`px-4 py-1 font-medium uppercase select-none tracking-wide focus:outline-none transform duration-75`,
    tw`border-2 border-transparent rounded-none`,
    // Use the variant grouping feature to add variants to multiple classes
    tw`pointer-fine:hover:(border-yellow-500) `,
    tw` text-black text-sm`,

    // Conditional props can be added
    selected ? tw`font-bold cursor-not-allowed hover:border-transparent` : tw``,

    // The theme import can supply values from your tailwind.config.js
    // css`
    //   color: ${theme`colors.black`};
    // `,
  ],
)
