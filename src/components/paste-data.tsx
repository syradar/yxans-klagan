import React, { useRef, useState } from 'react'
import tw from 'twin.macro'

export interface PasteDataProps {
  onData: (e: string) => void
  onFocusTextArea: () => void
  label: string
}

export const PasteData = ({
  onData,
  onFocusTextArea,
  label,
}: PasteDataProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)

  const [textareaHasFocus, setTextareaHasFocus] = useState(false)

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pasteData = e.clipboardData.getData('text').trim()
    if (pasteData !== '') {
      onData(pasteData)
    }

    e.stopPropagation()
    e.preventDefault()
    textAreaRef.current?.blur()
    setTextareaHasFocus(false)
  }

  const handleTextAreaFocus = () => {
    setTextareaHasFocus(true)
    onFocusTextArea()
  }

  const handleTextAreaBlur = () => {
    setTextareaHasFocus(false)
  }

  return (
    <div tw="relative bg-white border-2 border-black pointer-fine:hover:border-red-500 focus:outline-none">
      <textarea
        ref={textAreaRef}
        css={{ padding: '0.5rem 1rem' }}
        tw="absolute w-full opacity-0 focus:opacity-100 bg-transparent focus:outline-none"
        onFocus={(_) => handleTextAreaFocus()}
        onBlur={(_) => handleTextAreaBlur()}
        onPasteCapture={handlePaste}
      ></textarea>
      <span
        ref={spanRef}
        tw="block px-4 py-2 font-bold uppercase tracking-wide"
        css={[textareaHasFocus ? tw`opacity-0` : tw`opacity-100`]}
      >
        {label}
      </span>
    </div>
  )
}
