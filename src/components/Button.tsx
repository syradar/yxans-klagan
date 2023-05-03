import { useRef } from 'react'
import { useButton, AriaButtonProps } from 'react-aria'

const buttonStyles = (
  variant: ButtonProps['variant'],
  isSmall: ButtonProps['isSmall'],
  extraCss: ButtonProps['extraCss'],
) =>
  [
    // The common button styles
    `px-4 py-2 font-semibold select-none tracking-wide focus:outline-none`,
    `border-2 border-green-600 rounded shadow transition`,
    // Use the variant grouping feature to add variants to multiple classes
    `hover:bg-green-800 hover:border-green-800`,

    // Use props to conditionally style your components
    `bg-green-600 text-white`,

    // Combine regular css with tailwind classes within backticks
    variant === 'secondary' ? `bg-white text-black` : '',
    variant === 'disabled'
      ? 'bg-gray-400 text-gray-300 border-gray-400 cursor-not-allowed hover:bg-gray-400 hover:text-gray-300 hover:border-gray-400'
      : '',
    isSmall ? `text-sm px-4` : '',
    extraCss ? extraCss : '',
  ].join(' ')

type ButtonProps = AriaButtonProps & {
  variant?: 'secondary' | 'disabled'
  isSmall?: boolean
  extraCss?: HTMLButtonElement['className']
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)
  const { children, variant, isSmall = false, extraCss = '' } = props

  return (
    <button
      ref={ref}
      {...buttonProps}
      className={buttonStyles(variant, isSmall, extraCss)}
    >
      {children}
    </button>
  )
}
