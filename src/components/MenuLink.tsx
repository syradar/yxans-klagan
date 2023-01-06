import { FC } from 'react'
import { LinkProps, useLocation, useResolvedPath, Link } from 'react-router-dom'

type MenuLinkProps = LinkProps & {
  indent?: 0 | 1
}

export const MenuLink: FC<MenuLinkProps> = ({
  to,
  children,
  indent = 0,
}: MenuLinkProps) => {
  const { pathname } = useLocation()
  const { pathname: toPathname } = useResolvedPath(to)

  const isLinkActive = pathname === toPathname

  return (
    <Link
      className={`w-full  font-medium hover:bg-amber-900 hover:text-amber-50
      ${isLinkActive ? 'bg-amber-900/75 text-white hover:bg-amber-900 ' : ''}
      ${indent === 0 ? 'px-4 py-1' : ''}
      ${indent === 1 ? 'py-1 pl-8 pr-4' : ''}
      `}
      to={to}
    >
      {children}
    </Link>
  )
}
