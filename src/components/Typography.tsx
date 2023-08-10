type TypographyProps = {
  children: React.ReactNode
  variant?: 'h2' | 'h3' | 'h4' | 'body' | 'subTitle'
  parchment?: boolean
  useMargin?: boolean
  center?: boolean
}
export const Typography = ({
  children,
  variant = 'h2',
  parchment,
  useMargin = true,
  center = false,
}: TypographyProps) => {
  if (variant === 'body') {
    return (
      <p
        className={`
        ${parchment ? 'yx-prose' : ''}
        ${useMargin ? 'mb-1' : ''}
        ${center ? 'text-center' : ''}
        `}
      >
        {children}
      </p>
    )
  }

  if (variant === 'subTitle') {
    return (
      <div
        className={`
        text-stone-600
      ${parchment ? 'yx-prose' : ''}
      ${useMargin ? 'mb-1' : ''}
      ${center ? 'text-center' : ''}
      `}
      >
        {children}
      </div>
    )
  }

  if (variant === 'h4') {
    return (
      <h4
        className={`text-xl
      ${parchment ? 'yx-heading' : 'font-medium'}
      ${useMargin ? 'mb-1' : ''}
      ${center ? 'text-center' : ''}
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
      ${center ? 'text-center' : ''}
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
    ${center ? 'text-center' : ''}
    `}
    >
      {children}
    </h2>
  )
}
