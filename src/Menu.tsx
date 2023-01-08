import { nanoid } from 'nanoid'
import { lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteObject, useLocation, useResolvedPath } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import { TranslationKey } from './@types/i18next'
import { Group } from './components/group'
import { MenuLink } from './components/MenuLink'
import { Pancake } from './components/Stack'

const HomePage = lazy(() => import('./pages/Home.page'))
const CalendarPage = lazy(() => import('./pages/calendar.page'))
const EncounterPage = lazy(() => import('./pages/encounter.page'))
const FindsPage = lazy(() => import('./pages/finds.page'))
const GearPage = lazy(() => import('./pages/gear.page'))
const MapPage = lazy(() => import('./pages/map.page'))
const MonstersPage = lazy(() => import('./pages/monsters.page'))
const SessionPage = lazy(() => import('./pages/session.page'))
const TypicalKinPage = lazy(() => import('./pages/npc/TypicalKinPage'))
const NameGeneratorPage = lazy(() => import('./pages/npc/NameGeneratorPage'))
const NpcPage = lazy(() => import('./pages/npc/NpcPage'))

type MenuRoute = {
  readonly path: string
  readonly id: string
  readonly label: TranslationKey<'core'>
  readonly element?: JSX.Element
  readonly children?: MenuRoute[]
}

export const menuRoutes: MenuRoute[] = [
  {
    path: '',
    label: 'Menu',
    id: nanoid(),
    element: <HomePage />,
  },
  {
    path: 'session',
    id: nanoid(),
    label: 'Menu-Session',
    element: <SessionPage />,
  },
  {
    path: 'encounter',
    id: nanoid(),
    label: 'Menu-Encounters',
    element: <EncounterPage />,
  },
  {
    path: 'monsters',
    id: nanoid(),
    label: 'Menu-Monsters',
    element: <MonstersPage />,
  },
  {
    path: 'calendar',
    id: nanoid(),
    label: 'Menu-Calendar',
    element: <CalendarPage />,
  },
  // {
  //   path: 'dice',
  //   label: 'Menu-Dice',
  //   element: <DiceRollerPage />,
  // },
  {
    path: 'places',
    id: nanoid(),
    label: 'Menu-Places',
    children: [
      {
        path: 'map',
        id: nanoid(),
        label: 'Menu-Places-Map',
        element: <MapPage />,
      },
    ],
  },
  {
    path: 'gear',
    id: nanoid(),
    label: 'Menu-Gear',
    children: [
      {
        path: 'tables',
        id: nanoid(),
        label: 'Menu-Gear-Tables',
        element: <GearPage />,
      },
      {
        path: 'finds',
        id: nanoid(),
        label: 'Menu-Gear-Finds',
        element: <FindsPage />,
      },
    ],
  },
  {
    path: 'npcs',
    id: nanoid(),
    label: 'Menu-NPCs',
    children: [
      {
        path: 'names',
        id: nanoid(),
        label: 'Menu-NPCs-Names',
        element: <NameGeneratorPage />,
      },
      {
        path: 'typical',
        id: nanoid(),
        label: 'Menu-NPCs-Typical',
        element: <TypicalKinPage />,
      },
      {
        path: 'npc',
        id: nanoid(),
        label: 'Menu-NPCs-Npc',
        element: <NpcPage />,
      },
    ],
  },
]

export const appRoutes: RouteObject[] = menuRoutes.map((route) => {
  if (route.children) {
    return {
      path: route.path,
      children: route.children.map((child) => ({
        path: child.path,
        element: child.element,
      })),
    }
  }

  return {
    path: route.path,
    element: route.element,
  }
})

type MenuProps = {
  menuRoutes: MenuRoute[]
  close: () => void
}
export const Menu = ({ menuRoutes, close }: MenuProps) => {
  const { t } = useTranslation('core')
  const { pathname } = useLocation()
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isPageActive = (toPath: string) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    pathname.includes(useResolvedPath(toPath).pathname)

  return (
    <>
      {menuRoutes
        .filter((mr) => mr.path !== '')
        .map((route) => {
          if (route.children) {
            return (
              <div key={route.id}>
                <Group
                  menu
                  spaceBeforeItems={false}
                  label={<div className="font-medium">{t(route.label)}</div>}
                  open={isPageActive(`/${route.path}`)}
                >
                  <div className="mt-2">
                    <Pancake spacing="small">
                      {route.children.map((child) => (
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
                </Group>
              </div>
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
  const { t } = useTranslation('core')

  return (
    <MenuLink to={to} indent={indent} onClick={onClick}>
      {t(label)}
    </MenuLink>
  )
}
