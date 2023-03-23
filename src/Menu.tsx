import { nanoid } from 'nanoid'
import { lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteObject, useLocation, useResolvedPath } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import { TranslationKey } from './@types/i18next'
import { Group, GroupProps } from './components/group'
import { MenuLink } from './components/MenuLink'
import { Pancake } from './components/Stack'

const HomePage = lazy(() => import('./pages/Home.page'))
const CalendarPage = lazy(() => import('./pages/calendar.page'))
const EncounterPage = lazy(() => import('./pages/encounter.page'))
const FindsPage = lazy(() => import('./pages/finds.page'))
const GearPage = lazy(() => import('./pages/gear.page'))
const VillagePage = lazy(() => import('./pages/village/village.page'))
const MapPage = lazy(() => import('./pages/places/MapPage'))
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
    label: 'core:Menu',
    id: nanoid(),
    element: <HomePage />,
  },
  {
    path: 'session',
    id: nanoid(),
    label: 'core:Menu-Session',
    element: <SessionPage />,
  },
  {
    path: 'encounter',
    id: nanoid(),
    label: 'core:Menu-Encounters',
    element: <EncounterPage />,
  },
  {
    path: 'monsters',
    id: nanoid(),
    label: 'core:Menu-Monsters',
    element: <MonstersPage />,
  },
  {
    path: 'calendar',
    id: nanoid(),
    label: 'core:Menu-Calendar',
    element: <CalendarPage />,
  },
  // {
  //   path: 'dice',
  //   label: 'core:Menu-Dice',
  //   element: <DiceRollerPage />,
  // },
  {
    path: 'places',
    id: nanoid(),
    label: 'core:Menu-Places',
    children: [
      {
        path: 'village',
        id: nanoid(),
        label: 'core:Menu-Places-Village',
        element: <VillagePage />,
      },
      {
        path: 'map',
        id: nanoid(),
        label: 'core:Menu-Places-Map',
        element: <MapPage />,
      },
    ],
  },
  {
    path: 'gear',
    id: nanoid(),
    label: 'core:Menu-Gear',
    children: [
      {
        path: 'tables',
        id: nanoid(),
        label: 'core:Menu-Gear-Tables',
        element: <GearPage />,
      },
      {
        path: 'finds',
        id: nanoid(),
        label: 'core:Menu-Gear-Finds',
        element: <FindsPage />,
      },
    ],
  },
  {
    path: 'npcs',
    id: nanoid(),
    label: 'core:Menu-NPCs',
    children: [
      {
        path: 'names',
        id: nanoid(),
        label: 'core:Menu-NPCs-Names',
        element: <NameGeneratorPage />,
      },
      {
        path: 'typical',
        id: nanoid(),
        label: 'core:Menu-NPCs-Typical',
        element: <TypicalKinPage />,
      },
      {
        path: 'npc',
        id: nanoid(),
        label: 'core:Menu-NPCs-Npc',
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

  const isLg = useMediaQuery('(min-width: 1024px)')

  return (
    <>
      {menuRoutes
        .filter((mr) => mr.path !== '')
        .map((route) => {
          if (route.children) {
            return (
              <MenuGroup
                key={route.id}
                to={`/${route.path}`}
                menu
                spaceBeforeItems={false}
                label={
                  <div className="font-medium">
                    {t(route.label, {
                      ns: 'core',
                      defaultValue: route.label,
                    })}
                  </div>
                }
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
  const { t } = useTranslation()

  return (
    <MenuLink to={to} indent={indent} onClick={onClick}>
      {t(label, {
        ns: 'core',
        defaultValue: label,
      })}
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

  console.log('isPageActive', isPageActive, pathname, to)

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
