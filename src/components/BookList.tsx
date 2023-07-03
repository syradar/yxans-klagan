import { ComponentPropsWithoutRef } from 'react'

type BookListProps = ComponentPropsWithoutRef<'ul'>

export const BookList = ({ children }: BookListProps) => {
  return (
    <ul
      className="grid grid-flow-col-dense grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2"
      style={{
        gridTemplateRows: Array.isArray(children)
          ? `repeat(${Math.ceil(children.length / 2)}, minmax(0, 1fr))`
          : undefined,
      }}
    >
      {children}
    </ul>
  )
}
