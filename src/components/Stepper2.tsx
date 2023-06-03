import { useRef } from 'react'
import { useNumberField, AriaNumberFieldProps } from 'react-aria'
import { useNumberFieldState } from 'react-stately'
import { ParchmentButton } from './ParchmentButton'
import { useAppSelector } from '../store/store.hooks'
import { selectCurrentLanguage } from '../store/translations/translation.slice'

// Reuse the Button from your component library. See below for details.

export type NumberFieldProps = AriaNumberFieldProps & {
  onClick?: () => void
}
export const NumberField = (props: NumberFieldProps) => {
  const currentLanguage = useAppSelector(selectCurrentLanguage)
  const state = useNumberFieldState({ ...props, locale: currentLanguage })
  const inputRef = useRef(null)

  const {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
  } = useNumberField(props, state, inputRef)

  return (
    <div>
      <label {...labelProps}>{props.label}</label>
      <div {...groupProps}>
        <ParchmentButton {...decrementButtonProps}>-</ParchmentButton>
        <input {...inputProps} ref={inputRef} />
        <ParchmentButton {...incrementButtonProps}>+</ParchmentButton>
      </div>
    </div>
  )
}
