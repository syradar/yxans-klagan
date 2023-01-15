type TypographyProps = {
  children: React.ReactNode
  variant?: 'h2' | 'h3' | 'h4'
  parchment?: boolean
  useMargin?: boolean
}
export const Typography = ({
  children,
  variant = 'h2',
  parchment,
  useMargin = true,
}: TypographyProps) => {
  if (variant === 'h4') {
    return (
      <h4
        className={`text-xl
        ${parchment ? 'yx-heading' : 'font-medium'}
        ${useMargin ? 'mb-1' : ''}
        `}
      >
        {children}
      </h4>
    )
  }

  if (variant === 'h3') {
    return (
      <h3
        className={`text-2xl
        ${parchment ? 'yx-heading' : 'font-medium'}
        ${useMargin ? 'mb-2' : ''}
        `}
      >
        {children}
      </h3>
    )
  }

  return (
    <h2
      className={`text-4xl
      ${parchment ? 'yx-heading uppercase' : 'font-medium'}
      ${useMargin ? 'mb-4' : ''}
      `}
    >
      {children}
    </h2>
  )
}
