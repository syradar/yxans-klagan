import { ComponentPropsWithoutRef } from 'react'

type BookListProps = ComponentPropsWithoutRef<'ul'>

export const BookList = ({ children }: BookListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
      {children}
    </ul>
  )
}
