import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'
import { ComponentPropsWithoutRef } from 'react'
import { Link, LinkProps } from 'react-router-dom'

type BackLinkProps = LinkProps &
  ComponentPropsWithoutRef<'a'> & {
    right?: boolean
    icon: 'back' | 'lastPage' | 'nextPage'
  }

const icons: Record<BackLinkProps['icon'], React.ReactNode> = {
  back: <ArrowLeftIcon className="h-5 w-5" />,
  lastPage: <ChevronLeftIcon className="h-5 w-5" />,
  nextPage: <ChevronRightIcon className="h-5 w-5" />,
}

export const LinkWithIcon = ({
  children,
  to,
  icon,
  right = false,
}: BackLinkProps) => {
  const iconToRender = icons[icon]

  return (
    <Link
      className={`flex items-center gap-1 hover:text-red-700 hover:underline
      ${right ? 'justify-end text-right' : 'justify-start text-left'}
      `}
      to={to}
    >
      {!right && iconToRender}
      {children}
      {right && iconToRender}
    </Link>
  )
}
