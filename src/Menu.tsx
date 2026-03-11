import { nanoid } from 'nanoid'
import { ReactNode, lazy } from 'react'
import { RouteObject, useLocation, useResolvedPath } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import { MenuLink } from './components/MenuLink'
import { Pancake } from './components/Stack'
import { Group, GroupProps } from './components/group'
import { useAppSelector } from './store/store.hooks'
import { TranslationKey } from './store/translations/translation.model'
import { selectTranslateFunction } from './store/translations/translation.slice'

const HomePage = lazy(() => import('./pages/home.page'))
const CalendarPage = lazy(() => import('./pages/calendar/calendar.page'))
const EncounterPage = lazy(() => import('./pages/encounter.page'))
const FindsPage = lazy(() => import('./pages/finds.page'))
const GearPage = lazy(() => import('./pages/gear.page'))
// Ojo: La página de la aldea ya no se importa aquí, ahora vive en el mapa
const MapPage = lazy(() => import('./pages/places/MapPage'))
const MonstersPage = lazy(
  () => import('./features/monsters/pages/monsters.page'),
)
const SessionPage = lazy(() => import('./pages/session.page'))
const TypicalKinPage = lazy(() => import('./pages/npc/TypicalKinPage'))
const NameGeneratorPage = lazy(() => import('./pages/npc/NameGeneratorPage'))
const NpcPage = lazy(() => import('./pages/npc/NpcPage'))

type MenuRoute = {
  readonly path: string
  readonly id: string
  readonly label: TranslationKey<'core'>
  readonly element?: ReactNode
  readonly children?: MenuRoute[]
  readonly showInMenu?: boolean
}

export const menuRoutes: MenuRoute[] = [
  {
    path: '',
    label: 'core:menu.menu',
    id: nanoid(),
    element: <HomePage />,
  },
  {
    path: 'session',
    id: nanoid(),
    label: 'core:menu.session',
    element: <SessionPage />,
  },
{
    path: 'encounter',
    id: nanoid(),
    label: 'core:menu.encounters',
    element: <EncounterPage />,
    showInMenu: false, // <-- AÑADE ESTO
  },
  {
    path: 'monsters',
    showInMenu: true,
    id: nanoid(),
    label: 'core:menu.monsters',
    element: <MonstersPage />,
    children: [
      {
        path: '',
        showInMenu: false,
        id: nanoid(),
        label: 'core:menu.session',
        element: <MonstersPage />,
      },
      {
        path: ':section',
        showInMenu: false,
        id: nanoid(),
        label: 'core:menu.session',
        element: <MonstersPage />,
        children: [
          {
            path: ':monster',
            showInMenu: false,
            id: nanoid(),
            label: 'core:menu.npcs.npcs',
            element: <MonstersPage />,
          },
        ],
      },
    ],
  },
  {
    path: 'calendar',
    id: nanoid(),
    label: 'core:menu.calendar',
    element: <CalendarPage />,
  },
  {
    path: 'places',
    id: nanoid(),
    label: 'core:menu.places.places',
    children: [
      // La aldea desaparece de aquí. Solo queda el Mapa
      {
        path: 'map',
        id: nanoid(),
        label: 'core:menu.places.map',
        element: <MapPage />,
      },
    ],
  },
  {
    path: 'gear',
    id: nanoid(),
    label: 'core:menu.gear.gear',
    children: [
      {
        path: 'tables',
        id: nanoid(),
        label: 'core:menu.gear.tables',
        element: <GearPage />,
      },
      {
        path: 'finds',
        id: nanoid(),
        label: 'core:menu.gear.finds',
        element: <FindsPage />,
      },
    ],
  },
  {
    path: 'npcs',
    id: nanoid(),
    label: 'core:menu.npcs.npcs',
    children: [
      {
        path: 'names',
        id: nanoid(),
        label: 'core:menu.npcs.names',
        element: <NameGeneratorPage />,
      },
      {
        path: 'typical',
        id: nanoid(),
        label: 'core:menu.npcs.typical',
        element: <TypicalKinPage />,
      },
      {
        path: 'npc',
        id: nanoid(),
        label: 'core:menu.npcs.npc',
        element: <NpcPage />,
      },
    ],
  },
  {
    path: '*',
    label: 'core:menu.monsters',
    id: nanoid(),
    element: <HomePage />,
    showInMenu: false,
  },
]

const createAppRouteRecurisvely = (menuRoutes: MenuRoute[]): RouteObject[] => {
  return menuRoutes.map((route) => {
    if (route.children && route.children.length > 0) {
      const childRoutes = createAppRouteRecurisvely(route.children)

      const children = childRoutes.length === 0 ? undefined : childRoutes
      const element =
        route.element && route.children.every((c) => c.showInMenu === false)
          ? route.element
          : undefined

      return {
        path: route.path,
        children,
        element,
      }
    }

    return {
      path: route.path,
      element: route.element,
    }
  })
}

export const appRoutes: RouteObject[] = createAppRouteRecurisvely(menuRoutes)

type MenuProps = {
  menuRoutes: MenuRoute[]
  close: () => void
}
export const Menu = ({ menuRoutes, close }: MenuProps) => {
  const t = useAppSelector(selectTranslateFunction(['core']))
  const isLg = useMediaQuery('(min-width: 1024px)')

  return (
    <>
      {menuRoutes
        .filter((mr) => mr.path !== '' && mr.showInMenu !== false)
        .map((route) => {
          if (
            route.children &&
            route.children.length > 0 &&
            route.children.every((c) => c.showInMenu !== false)
          ) {
            return (
              <MenuGroup
                key={route.id}
                to={`/${route.path}`}
                menu
                spaceBeforeItems={false}
                label={<div className="font-medium">{t(route.label)}</div>}
              >
                <div className="mt-2">
                  <Pancake spacing="small">
                    {route.children
                      .filter((c) => c.showInMenu !== false)
                      .map((child) => (
                        <MenuItem
                          key={child.id}
                          label={child.label}
                          to={`${route.path}/${child.path}`}
                          indent={1}
                          onClick={() => !isLg && close()}
                        />
                      ))}
                  </Pancake>
                </div>
              </MenuGroup>
            )
          }

          return (
            <MenuItem
              key={route.id}
              label={route.label}
              to={route.path}
              indent={0}
              onClick={() => !isLg && close()}
            />
          )
        })}
    </>
  )
}
type MenuItemProps = {
  label: TranslationKey<'core'>
  to: string
  indent: 0 | 1
  onClick: () => void
}
const MenuItem = ({ indent, label, onClick, to }: MenuItemProps) => {
  const t = useAppSelector(selectTranslateFunction(['core']))

  return (
    <MenuLink to={to} indent={indent} onClick={onClick}>
      {t(label)}
    </MenuLink>
  )
}

type MenuGroupProps = Omit<GroupProps, 'open'> & {
  to: string
  groupKey?: string
}
const MenuGroup = ({ to, children, label, groupKey }: MenuGroupProps) => {
  const { pathname } = useLocation()
  const isPageActive = pathname.includes(useResolvedPath(to).pathname)

  return (
    <Group
      key={groupKey}
      menu
      spaceBeforeItems={false}
      label={label}
      open={isPageActive}
    >
      {children}
    </Group>
  )
}
