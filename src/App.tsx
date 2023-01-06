import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useResolvedPath, useRoutes } from 'react-router-dom'
import './App.css'
import { Group } from './components/group'
import { LanguageSwitcher } from './components/language-switcher'
import { MenuLink } from './components/MenuLink'
import { Pancake, Stack } from './components/Stack'
import { YxansKlaganLogo } from './logo'

const HomePage = lazy(() => import('./pages/Home.page'))
const CalendarPage = lazy(() => import('./pages/calendar.page'))
const DiceRollerPage = lazy(() => import('./pages/dice-roller.page'))
const EncounterPage = lazy(() => import('./pages/encounter.page'))
const FindsPage = lazy(() => import('./pages/finds.page'))
const GearPage = lazy(() => import('./pages/gear.page'))
const MapPage = lazy(() => import('./pages/map.page'))
const MonstersPage = lazy(() => import('./pages/monsters.page'))
const SessionPage = lazy(() => import('./pages/session.page'))
const TypicalKinPage = lazy(() => import('./pages/npc/TypicalKinPage'))
const NameGeneratorPage = lazy(() => import('./pages/npc/NameGeneratorPage'))
const NpcPage = lazy(() => import('./pages/npc/NpcPage'))

const appRoutes = [
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: 'dice',
    element: <DiceRollerPage />,
  },
  {
    path: 'npcs',
    children: [
      {
        path: 'names',
        element: <NameGeneratorPage />,
      },
      {
        path: 'typical',
        element: <TypicalKinPage />,
      },
      {
        path: 'npc',
        element: <NpcPage />,
      },
      {
        path: '*',
        element: <NameGeneratorPage />,
      },
    ],
  },
  {
    path: 'gear',
    children: [
      {
        path: 'tables',
        element: <GearPage />,
      },
      {
        path: 'finds',
        element: <FindsPage />,
      },
    ],
  },
  {
    path: 'calendar',
    element: <CalendarPage />,
  },
  {
    path: 'session',
    element: <SessionPage />,
  },
  {
    path: 'map',
    element: <MapPage />,
  },
  {
    path: 'encounter',
    element: <EncounterPage />,
  },
  {
    path: 'monsters',
    element: <MonstersPage />,
  },
]

const App = () => {
  const routes = useRoutes(appRoutes)

  const { t } = useTranslation('core')

  const { pathname } = useLocation()

  const toPathContains = (toPath: 'gear' | 'npcs') => (path: string) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    path.includes(useResolvedPath(toPath).pathname)

  const isGearPageActive = toPathContains('gear')
  const isKinPageActive = toPathContains('npcs')

  return (
    <div
      className={`App h-full min-h-screen w-screen max-w-full flex-col bg-amber-50/25`}
    >
      <div className="flex h-full flex-col lg:flex-row">
        <div className="fixed flex w-48 flex-col bg-amber-900/50 lg:h-full">
          <div className="mb-4 p-2">
            <Link to="/" className="block w-full ">
              <YxansKlaganLogo />
            </Link>
          </div>
          <div className="flex h-full flex-col justify-between overflow-auto pb-4">
            <div className="w-full text-lg">
              <Stack dir="vertical" wrap={false} spacing="small">
                <MenuLink to="/session">{t('Menu-Session')}</MenuLink>
                <MenuLink to="/encounter">{t('Menu-Encounters')}</MenuLink>
                <MenuLink to="/monsters">{t('Menu-Monsters')}</MenuLink>
                <MenuLink to="/map">{t('Menu-Map')}</MenuLink>
                <MenuLink to="/calendar">{t('Menu-Calendar')}</MenuLink>
                <div className="">
                  <Group
                    menu
                    spaceBeforeItems={false}
                    label={<div className="font-medium">{t('Menu-Gear')}</div>}
                    open={isGearPageActive(pathname)}
                  >
                    <div className="mt-2">
                      <Pancake spacing="small">
                        <MenuLink to="/gear/tables" indent={1}>
                          {t('Menu-Gear-Tables')}
                        </MenuLink>
                        <MenuLink to="/gear/finds" indent={1}>
                          {t('Menu-Gear-Finds')}
                        </MenuLink>
                      </Pancake>
                    </div>
                  </Group>
                </div>
                <div className="">
                  <Group
                    menu
                    spaceBeforeItems={false}
                    label={<div className="font-medium">{t('Menu-NPCs')}</div>}
                    open={isKinPageActive(pathname)}
                  >
                    <div className="mt-2">
                      <Pancake spacing="small">
                        <MenuLink to="/npcs/names" indent={1}>
                          {t('Menu-NPCs-Names')}
                        </MenuLink>
                        <MenuLink to="/npcs/typical" indent={1}>
                          {t('Menu-NPCs-Typical')}
                        </MenuLink>
                        <MenuLink to="/npcs/npc" indent={1}>
                          {t('Menu-NPCs-Npc')}
                        </MenuLink>
                      </Pancake>
                    </div>
                  </Group>
                </div>
              </Stack>
            </div>
            {/* <MenuLink to="/dice">{t('Menu-Dice')}</MenuLink> */}
            <LanguageSwitcher></LanguageSwitcher>
          </div>
          <a
            className="mb-4 inline text-center font-medium tracking-wide text-red-700 hover:underline"
            href="https://github.com/syradar/yxans-klagan/issues/new/choose"
          >
            {t('GiveFeedback')}
          </a>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <main className="mt-4 w-full lg:ml-48">{routes}</main>
        </Suspense>
      </div>
    </div>
  )
}

export default App
