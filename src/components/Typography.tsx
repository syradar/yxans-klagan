type TypographyProps = {
  children: React.ReactNode
  variant?: 'h2' | 'h3' | 'h4'
  parchment?: boolean
}
export const Typography = ({
  children,
  variant = 'h2',
  parchment,
}: TypographyProps) => {
  if (variant === 'h4') {
    return (
      <h4
        className={`mb-1 text-xl ${parchment ? 'yx-heading' : 'font-medium'}`}
      >
        {children}
      </h4>
    )
  }

  if (variant === 'h3') {
    return (
      <h3
        className={`mb-2 text-2xl ${parchment ? 'yx-heading' : 'font-medium'}`}
      >
        {children}
      </h3>
    )
  }

  return (
    <h2
      className={`mb-4 text-4xl ${
        parchment ? 'yx-heading uppercase' : 'font-medium'
      }`}
    >
      {children}
    </h2>
  )
}
