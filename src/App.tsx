import { FC, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Link,
  LinkProps,
  useLocation,
  useResolvedPath,
  useRoutes,
} from 'react-router-dom'
import './App.css'
import { Group } from './components/group'
import { LanguageSwitcher } from './components/language-switcher'
import { PageHeader } from './components/page-header'
import { Parchment } from './components/parchment'
import { Pancake, Stack } from './components/Stack'
import { YxansKlaganLogo } from './logo'

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

const App = () => {
  const routes = useRoutes([
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
  ])

  const { t } = useTranslation('core')

  const { pathname } = useLocation()

  const toPathContains = (toPath: 'gear' | 'npcs') => (path: string) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    path.includes(useResolvedPath(toPath).pathname)

  const isGearPageActive = toPathContains('gear')
  const isKinPageActive = toPathContains('npcs')

  return (
    <div
      className={`App h-full min-h-screen w-screen max-w-full flex-col bg-gray-50`}
    >
      <div className="flex h-full flex-col lg:flex-row">
        <div className="fixed flex w-48 flex-col bg-gray-200 lg:h-full">
          <div className="mb-4 p-2">
            <Link to="/" className="block w-full">
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
                <div className="pl-4">
                  <Group
                    spaceBeforeItems={false}
                    indent={false}
                    label={<div className="font-medium">{t('Menu-Gear')}</div>}
                    open={isGearPageActive(pathname)}
                  >
                    <div className="mt-2">
                      <Pancake spacing="small">
                        <MenuLink to="/gear/tables">
                          {t('Menu-Gear-Tables')}
                        </MenuLink>
                        <MenuLink to="/gear/finds">
                          {t('Menu-Gear-Finds')}
                        </MenuLink>
                      </Pancake>
                    </div>
                  </Group>
                </div>
                <div className="pl-4">
                  <Group
                    spaceBeforeItems={false}
                    indent={false}
                    label={<div className="font-medium">{t('Menu-NPCs')}</div>}
                    open={isKinPageActive(pathname)}
                  >
                    <div className="mt-2">
                      <Pancake spacing="small">
                        <MenuLink to="/npcs/names">
                          {t('Menu-NPCs-Names')}
                        </MenuLink>
                        <MenuLink to="/npcs/typical">
                          {t('Menu-NPCs-Typical')}
                        </MenuLink>
                        <MenuLink to="/npcs/npc">{t('Menu-NPCs-Npc')}</MenuLink>
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

const HomePage = () => (
  <div className="flex max-w-prose flex-col gap-y-8">
    <PageHeader>Svärdets Sång</PageHeader>
    <Parchment>
      <p className="yx-prose">
        Välkomna till Svärdets sång. I detta bordsrollspel är ni inte hjältar
        som utför uppdrag på order av andra – i stället är ni äventyrare och
        skattletare fast beslutna att sätta ert eget märke på denna fördömda
        värld. Ni kommer att vandra genom det vilda landet, utforska glömda
        gravar, kämpa mot fruktansvärda monster och – om ni lever länge nog –
        bygga ert eget fäste och försvara det mot fiender. Under era äventyr kan
        ni avslöja de mörka krafter som rör sig i skuggorna och till slut kan
        det bli ni som avgör Det glömda landets öde.
      </p>
    </Parchment>
    <Parchment>
      <div className="flex flex-col gap-4">
        <h2 className="yx-heading flex text-center text-4xl">Tack</h2>
        <p className="yx-prose">
          Tack till{' '}
          <a
            className="text-red-700 hover:underline"
            href="https://freeleaguepublishing.com/sv/"
          >
            Fria Ligan
          </a>{' '}
          för ett fantastiskt spel.
        </p>
        <p className="yx-prose">
          Tack till communityt för Svärdets Sång för inspiration och andra
          generatorer.
        </p>
      </div>
    </Parchment>
    <div></div>
  </div>
)

const MenuLink: FC<LinkProps> = ({ to, children }: LinkProps) => {
  const { pathname } = useLocation()
  const { pathname: toPathname } = useResolvedPath(to)

  const isLinkActive = pathname === toPathname

  return (
    <Link
      className={`w-full px-4 py-1 font-medium hover:bg-red-500
      ${
        isLinkActive
          ? 'bg-black font-semibold text-white hover:bg-black hover:text-red-500'
          : ''
      }
      `}
      to={to}
    >
      {children}
    </Link>
  )
}
