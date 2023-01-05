import { useRef, useState } from 'react'

export type PasteDataProps = {
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
    <div className="pointer-fine:hover:border-red-500 relative border-2 border-black bg-white focus:outline-none">
      <label htmlFor="paste-data-textarea" className="sr-only">
        Paste data here
      </label>
      <textarea
        id="paste-data-textarea"
        ref={textAreaRef}
        className="absolute w-full bg-transparent px-2 py-4 opacity-0 focus:opacity-100 focus:outline-none"
        onFocus={(_) => handleTextAreaFocus()}
        onBlur={(_) => handleTextAreaBlur()}
        onPasteCapture={handlePaste}
      ></textarea>
      <span
        ref={spanRef}
        className={`
        block px-4 py-2 font-bold uppercase tracking-wide
        ${textareaHasFocus ? 'opacity-0' : 'opacity-100'}
        `}
      >
        {label}
      </span>
    </div>
  )
}
