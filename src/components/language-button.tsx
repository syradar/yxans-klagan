import { ParchmentButton } from './ParchmentButton'

type LanguageButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

export const LanguageButton = ({
  children,
  disabled,
  onClick,
}: LanguageButtonProps) => (
  <ParchmentButton
    onClick={onClick}
    disabled={disabled}
    buttonType={'ghost'}
    small
  >
    {children}
  </ParchmentButton>
)
