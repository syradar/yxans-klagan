import { Disclosure, Transition } from '@headlessui/react'
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { createRef, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useResolvedPath, useRoutes } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import './App.css'
import { Group } from './components/group'
import { LanguageSwitcher } from './components/language-switcher'
import { MenuLink } from './components/MenuLink'
import { ForwardedParchmentButton } from './components/ParchmentButton'
import { Pancake, Stack } from './components/Stack'
import { YxansKlaganLogo } from './logo'

const HomePage = lazy(() => import('./pages/Home.page'))
const CalendarPage = lazy(() => import('./pages/calendar.page'))
const DiceRollerPage = lazy(() => import('./pages/dice-roller.page'))
const EncounterPage = lazy(() => import('./pages/encounter.page'))
const FindsPage = lazy(() => import('./pages/finds.page'))
const GearPage = lazy(() => import('./pages/gear.page'))
const MapPage = lazy(() => import('./pages/places/MapPage'))
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

  return (
    <div
      className={`App h-full min-h-screen w-screen max-w-full  bg-amber-50/25`}
    >
      <div className="flex flex-col lg:min-h-screen lg:flex-row">
        <AppMenu></AppMenu>
        <Suspense fallback={<div>Loading...</div>}>
          <main className="max-h-screen w-full overflow-auto p-8">
            {routes}
          </main>
        </Suspense>
      </div>
    </div>
  )
}

export default App

const AppMenu = () => {
  const { t } = useTranslation('core')

  const ref = createRef<HTMLButtonElement>()

  const { pathname } = useLocation()

  const toPathContains = (toPath: 'gear' | 'npcs') => (path: string) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    path.includes(useResolvedPath(toPath).pathname)

  const isGearPageActive = toPathContains('gear')
  const isKinPageActive = toPathContains('npcs')

  const isLg = useMediaQuery('(min-width: 1024px)')

  return (
    <Disclosure as="div" className={`lg:h-full`} defaultOpen={isLg}>
      {({ open, close }) => (
        <div className="flex flex-col lg:h-full lg:min-h-screen">
          <div
            className={`
        relative z-50
        ${open ? 'lg:w-64' : 'shadow-md lg:shadow-none'}
        `}
            style={{
              backgroundColor: open || !isLg ? '#bb9883' : 'transparent',
            }}
          >
            <div
              className={`
            flex items-center justify-between
            ${open ? '' : 'lg:justify-end'}
            `}
            >
              {!isLg || open ? (
                <div className="p-2">
                  <Link
                    to="/"
                    className="block w-full"
                    onClick={() => !isLg && close()}
                  >
                    <YxansKlaganLogo />
                  </Link>
                </div>
              ) : null}

              <div className="p-2">
                <Disclosure.Button
                  as={ForwardedParchmentButton}
                  buttonType="secondary"
                  forwardedRef={ref}
                >
                  <div className="flex items-center gap-1 font-medium">
                    {isLg && open && (
                      <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                    )}
                    {isLg && !open && (
                      <ArrowRightOnRectangleIcon className="h-6 w-6" />
                    )}
                    {!isLg && <Bars3Icon className="h-1em w-1em" />}
                    {!isLg ? <span>{t('Menu', { ns: 'core' })}</span> : null}
                  </div>
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            as="div"
            className="lg:flex lg:h-full lg:flex-auto lg:flex-col"
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform max-lg:-translate-y-full lg:-translate-x-full opacity-0"
            enterTo="transform max-lg:translate-y-0 lg:translate-x-0 opacity-100 lg:h-full"
            leave="transition duration-75 ease-out"
            leaveFrom="transform max-lg:translate-y-0 lg:translate-x-0 opacity-100"
            leaveTo="transform max-lg:-translate-y-full lg:-translate-x-full opacity-0"
          >
            <Disclosure.Panel
              as="div"
              className={`h-full lg:flex lg:flex-auto lg:flex-col`}
            >
              {({ close }) => (
                <div className="flex w-full flex-auto flex-col justify-between  bg-amber-900/50 lg:h-full lg:w-64">
                  <div className="flex h-full flex-col justify-between overflow-auto pb-4 lg:flex-auto">
                    <div className="w-full text-lg">
                      <Stack dir="vertical" wrap={false} spacing="small">
                        <MenuLink
                          to="/session"
                          onClick={() => !isLg && close()}
                        >
                          {t('Menu-Session')}
                        </MenuLink>
                        <MenuLink
                          to="/encounter"
                          onClick={() => !isLg && close()}
                        >
                          {t('Menu-Encounters')}
                        </MenuLink>
                        <MenuLink
                          to="/monsters"
                          onClick={() => !isLg && close()}
                        >
                          {t('Menu-Monsters')}
                        </MenuLink>
                        <MenuLink to="/map" onClick={() => !isLg && close()}>
                          {t('Menu-Places-Map')}
                        </MenuLink>
                        <MenuLink
                          to="/calendar"
                          onClick={() => !isLg && close()}
                        >
                          {t('Menu-Calendar')}
                        </MenuLink>
                        <div className="">
                          <Group
                            menu
                            spaceBeforeItems={false}
                            label={
                              <div className="font-medium">
                                {t('Menu-Gear')}
                              </div>
                            }
                            open={isGearPageActive(pathname)}
                          >
                            <div className="mt-2">
                              <Pancake spacing="small">
                                <MenuLink
                                  to="/gear/tables"
                                  indent={1}
                                  onClick={() => !isLg && close()}
                                >
                                  {t('Menu-Gear-Tables')}
                                </MenuLink>
                                <MenuLink
                                  to="/gear/finds"
                                  indent={1}
                                  onClick={() => !isLg && close()}
                                >
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
                            label={
                              <div className="font-medium">
                                {t('Menu-NPCs')}
                              </div>
                            }
                            open={isKinPageActive(pathname)}
                          >
                            <div className="mt-2">
                              <Pancake spacing="small">
                                <MenuLink
                                  to="/npcs/names"
                                  indent={1}
                                  onClick={() => !isLg && close()}
                                >
                                  {t('Menu-NPCs-Names')}
                                </MenuLink>
                                <MenuLink
                                  to="/npcs/typical"
                                  indent={1}
                                  onClick={() => !isLg && close()}
                                >
                                  {t('Menu-NPCs-Typical')}
                                </MenuLink>
                                <MenuLink
                                  to="/npcs/npc"
                                  indent={1}
                                  onClick={() => !isLg && close()}
                                >
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
                    className="mb-4 mt-auto text-center font-medium tracking-wide text-red-700 hover:underline"
                    href="https://github.com/syradar/yxans-klagan/issues/new/choose"
                  >
                    {t('GiveFeedback')}
                  </a>
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  )
}
