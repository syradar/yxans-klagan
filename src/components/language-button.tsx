import { ParchmentButton, ParchmentButtonProps } from './ParchmentButton'

export const LanguageButton = (props: ParchmentButtonProps) => {
  return (
    <ParchmentButton
      {...props}
      buttonType={'ghost'}
      small
      isDisabled={props.isDisabled}
    >
      {props.children}
    </ParchmentButton>
  )
}
