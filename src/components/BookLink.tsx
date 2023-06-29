import { Link, LinkProps } from 'react-router-dom'

type BookLinkProps = LinkProps & {
  children: React.ReactNode
  pageReference?: string
}

export const BookLink = ({ to, children, pageReference }: BookLinkProps) => {
  return (
    <Link
      className={`group flex w-full items-baseline
      gap-1
      `}
      to={to}
    >
      <div className="text-red-700 group-hover:underline">{children}</div>
      {pageReference ? (
        <>
          <div className="flex-1 border-b border-dotted border-b-black"></div>
          <div>{pageReference}</div>
        </>
      ) : null}
    </Link>
  )
}
