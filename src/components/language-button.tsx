type LanguageButtonProps = {
  selected?: boolean
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

export const LanguageButton = ({
  selected,
  children,
  disabled,
  onClick,
}: LanguageButtonProps) => (
  <button
    type="button"
    className={`
    pointer-fine:hover:border-red-500 select-none rounded-none border-2 border-transparent px-4 py-1 text-sm
    font-medium uppercase tracking-wide
    text-black
     duration-75 focus:outline-none

    ${selected ? 'cursor-not-allowed font-bold hover:border-transparent' : ''}
`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)
