import React, { FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Link,
  LinkProps,
  useLocation,
  useResolvedPath,
  useRoutes,
} from 'react-router-dom'
import tw from 'twin.macro'
import './App.css'
import { Group } from './components/group'
import { LanguageSwitcher } from './components/language-switcher'
import { PageHeader } from './components/page-header'
import { Parchment } from './components/parchment'
import { Pancake, Stack } from './components/Stack'
import { YxansKlaganLogo } from './logo'

const CalendarPage = React.lazy(() => import('./pages/calendar.page'))
const DiceRollerPage = React.lazy(() => import('./pages/dice-roller.page'))
const EncounterPage = React.lazy(() => import('./pages/encounter.page'))
const FindsPage = React.lazy(() => import('./pages/finds.page'))
const GearPage = React.lazy(() => import('./pages/gear.page'))
const MapPage = React.lazy(() => import('./pages/map.page'))
const MonstersPage = React.lazy(() => import('./pages/monsters.page'))
const SessionPage = React.lazy(() => import('./pages/session.page'))
const TypicalKinPage = React.lazy(() => import('./pages/npc/TypicalKinPage'))
const NameGeneratorPage = React.lazy(
  () => import('./pages/npc/NameGeneratorPage'),
)
const NpcPage = React.lazy(() => import('./pages/npc/NpcPage'))

const styles = {
  // Move long class sets out of jsx to keep it scannable
  // container: ({ hasBackground }: { hasBackground: boolean }) => [
  container: () => [
    tw`bg-gray-50 flex-col min-h-screen h-full w-screen max-w-full`,
    // hasBackground && tw`wbg-gradient-to-b from-electric to-ribbon`,
  ],
}

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
    path.includes(useResolvedPath(toPath).pathname)

  const isGearPageActive = toPathContains('gear')
  const isKinPageActive = toPathContains('npcs')

  return (
    <div className="App" css={styles.container()}>
      <div tw="flex flex-col h-full lg:(flex-row)">
        <div tw="flex flex-col bg-gray-200 lg:(h-full fixed w-48 )">
          <div tw="p-2 mb-4">
            <Link to="/" tw="block w-full">
              <YxansKlaganLogo />
            </Link>
          </div>
          <div
            tw="h-full pb-4 flex flex-col justify-between"
            css={{ overflow: 'overlay' }}
          >
            <PancakeNav dir="vertical" wrap={false} spacing="small">
              <MenuLink to="/session">{t('Menu-Session')}</MenuLink>
              <MenuLink to="/encounter">{t('Menu-Encounters')}</MenuLink>
              <MenuLink to="/monsters">{t('Menu-Monsters')}</MenuLink>
              <MenuLink to="/map">{t('Menu-Map')}</MenuLink>
              <MenuLink to="/calendar">{t('Menu-Calendar')}</MenuLink>
              <div tw="pl-4">
                <Group
                  spaceBeforeItems={false}
                  indent={false}
                  label={<div tw="font-medium">{t('Menu-Gear')}</div>}
                  open={isGearPageActive(pathname)}
                >
                  <div tw="mt-2">
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
              <div tw="pl-4">
                <Group
                  spaceBeforeItems={false}
                  indent={false}
                  label={<div tw="font-medium">{t('Menu-NPCs')}</div>}
                  open={isKinPageActive(pathname)}
                >
                  <div tw="mt-2">
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
            </PancakeNav>
            {/* <MenuLink to="/dice">{t('Menu-Dice')}</MenuLink> */}
            <LanguageSwitcher></LanguageSwitcher>
          </div>
          <a
            tw="inline text-center mb-4 font-medium tracking-wide text-red-700 hover:underline"
            href="https://github.com/syradar/yxans-klagan/issues/new/choose"
          >
            {t('GiveFeedback')}
          </a>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <main tw="w-full mt-4 lg:(ml-48)">{routes}</main>
        </Suspense>
      </div>
    </div>
  )
}

export default App

const PancakeNav = tw(Stack)`text-lg w-full`

const HomePage = () => (
  <div tw="flex flex-col gap-y-8 max-w-prose">
    <PageHeader>Sv??rdets S??ng</PageHeader>
    <Parchment>
      <p className="yx-prose">
        V??lkomna till Sv??rdets s??ng. I detta bordsrollspel ??r ni inte hj??ltar
        som utf??r uppdrag p?? order av andra ??? i st??llet ??r ni ??ventyrare och
        skattletare fast beslutna att s??tta ert eget m??rke p?? denna f??rd??mda
        v??rld. Ni kommer att vandra genom det vilda landet, utforska gl??mda
        gravar, k??mpa mot fruktansv??rda monster och ??? om ni lever l??nge nog ???
        bygga ert eget f??ste och f??rsvara det mot fiender. Under era ??ventyr kan
        ni avsl??ja de m??rka krafter som r??r sig i skuggorna och till slut kan
        det bli ni som avg??r Det gl??mda landets ??de.
      </p>
    </Parchment>
    <Parchment>
      <div tw="flex flex-col gap-4">
        <h2 tw="text-4xl text-center flex" className="yx-heading">
          Tack
        </h2>
        <p className="yx-prose">
          Tack till{' '}
          <a
            tw="text-red-700 hover:underline"
            href="https://freeleaguepublishing.com/sv/"
          >
            Fria Ligan
          </a>{' '}
          f??r ett fantastiskt spel.
        </p>
        <p className="yx-prose">
          Tack till communityt f??r Sv??rdets S??ng f??r inspiration och andra
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
      tw="px-4 py-1 w-full font-medium hover:bg-red-500"
      css={[
        isLinkActive &&
          tw`bg-black text-white font-semibold hover:bg-black hover:text-red-500`,
      ]}
      to={to}
    >
      {children}
    </Link>
  )
}
