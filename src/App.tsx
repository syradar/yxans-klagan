import React, { FC } from 'react'
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
import { Pancake, Stack } from './components/stack'
import { YxansKlaganLogo } from './logo'
import { CalendarPage } from './pages/calendar.page'
import { DiceRollerPage } from './pages/dice-roller.page'
import { EncounterPage } from './pages/encounter.page'
import { FindsPage } from './pages/finds.page'
import { GearPage } from './pages/gear.page'
import { MapPage } from './pages/map.page'
import { MonstersPage } from './pages/monsters.page'
import { NameGeneratorPage } from './pages/name-generator.page'
import { SessionPage } from './pages/session.page'
import { TypicalKinPage } from './pages/typical-kin.page'

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
      path: 'kin',
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

  const toPathContains = (toPath: 'gear' | 'kin') => (path: string) =>
    path.includes(useResolvedPath(toPath).pathname)

  const isGearPageActive = toPathContains('gear')
  const isKinPageActive = toPathContains('kin')

  return (
    <div className="App" css={styles.container()}>
      <div tw="flex flex-col h-full lg:(flex-row)">
        <div tw="flex flex-col bg-gray-200 lg:(h-full fixed w-48 )">
          <div tw="p-2 mb-4">
            <Link to="/" tw="block w-full">
              <YxansKlaganLogo />
            </Link>
          </div>
          <div tw="h-full pb-4 flex flex-col justify-between">
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
                  label={<div tw="font-medium">{t('Menu-Kin')}</div>}
                  open={isKinPageActive(pathname)}
                >
                  <div tw="mt-2">
                    <Pancake spacing="small">
                      <MenuLink to="/kin/names">{t('Menu-Kin-Names')}</MenuLink>
                      <MenuLink to="/kin/typical">
                        {t('Menu-Kin-Typical')}
                      </MenuLink>
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

        <main tw="w-full mt-4 lg:(ml-48)">{routes}</main>
      </div>
    </div>
  )
}

export default App

const PancakeNav = tw(Stack)`text-lg w-full`

const HomePage = () => (
  <div tw="flex flex-col gap-y-8 max-w-prose">
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
