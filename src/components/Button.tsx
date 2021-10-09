import tw, { styled } from 'twin.macro'

interface ButtonProps {
  variant?: 'secondary' | 'disabled'
  isSmall?: boolean
}

const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  // The common button styles
  tw`px-8 py-2 font-bold uppercase tracking-wide focus:outline-none transform duration-75`,
  tw`border-2 border-black rounded-none`,
  // Use the variant grouping feature to add variants to multiple classes
  tw`hover:(bg-yellow-500 border-yellow-500 text-black)`,

  // Use props to conditionally style your components
  tw`bg-black text-white`,

  // Combine regular css with tailwind classes within backticks
  variant === 'secondary' && [
    // css`
    //   box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    // `,
    tw`bg-white text-black`,
  ],

  variant === 'disabled' && [
    // css`
    //   box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    // `,
    tw`bg-gray-400 text-gray-300 border-gray-400 cursor-not-allowed hover:(bg-gray-400 text-gray-300 border-gray-400)`,
  ],

  // Conditional props can be added
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  // css`
  //   color: ${theme`colors.black`};
  // `,
])

export default Button
