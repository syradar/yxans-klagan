import React, { FC } from 'react'
import {
  Link,
  LinkProps,
  useLocation,
  useResolvedPath,
  useRoutes,
} from 'react-router-dom'
import tw from 'twin.macro'
import './App.css'
import { PageHeader, Parchment } from './components'
import { LanguageSwitcher } from './components/language-switcher'
import YxansKlaganLogo from './logo'
import { CalendarPage } from './pages/calendar.page'
import { DiceRollerPage } from './pages/dice-roller.page'
import { EncounterPage } from './pages/encounter.page'
import { GearPage } from './pages/gear.page'
import { MapPage } from './pages/map.page'
import { NameGeneratorPage } from './pages/name-generator.page'
import { SessionPage } from './pages/session.page'
import { useTranslation } from 'react-i18next'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  // container: ({ hasBackground }: { hasBackground: boolean }) => [
  container: () => [
    tw`bg-gray-50 flex-col min-h-screen h-full w-screen max-w-full`,
    // hasBackground && tw`wbg-gradient-to-b from-electric to-ribbon`,
    //tw`bg-yellow-50`,
  ],
}

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/dice',
      element: <DiceRollerPage />,
    },
    {
      path: '/names',
      element: <NameGeneratorPage />,
    },
    {
      path: '/gear',
      element: <GearPage />,
    },
    {
      path: '/calendar',
      element: <CalendarPage />,
    },
    {
      path: '/session',
      element: <SessionPage />,
    },
    {
      path: '/map',
      element: <MapPage />,
    },
    {
      path: '/encounter',
      element: <EncounterPage />,
    },
  ])

  const { t } = useTranslation('core')

  return (
    <div className="App" css={styles.container()}>
      <div tw="flex flex-col h-full lg:(flex-row)">
        <div tw="flex flex-col bg-gray-200 lg:(h-full fixed w-48 )">
          <div tw="p-2 mb-4">
            <Link to="/" tw="block w-full">
              <YxansKlaganLogo />
            </Link>
          </div>
          <div tw="h-full flex flex-col justify-between pb-4">
            <nav tw="text-lg w-full flex flex-col gap-y-1">
              <MenuLink to="/session">{t('Menu-Session')}</MenuLink>
              <MenuLink to="/encounter">{t('Menu-Encounters')}</MenuLink>
              <MenuLink to="/map">{t('Menu-Map')}</MenuLink>
              <MenuLink to="/calendar">{t('Menu-Calendar')}</MenuLink>
              <MenuLink to="/gear">{t('Menu-Gear')}</MenuLink>
              <MenuLink to="/names">{t('Menu-Names')}</MenuLink>
              {/* <MenuLink to="/dice">{t('Menu-Dice')}</MenuLink> */}
            </nav>
            <LanguageSwitcher></LanguageSwitcher>
          </div>
        </div>

        <main tw="w-full mt-4 lg:(ml-48)">{routes}</main>
      </div>
    </div>
  )
}

export default App

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
            tw=" hover:text-yellow-500 underline"
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
      tw="px-4 py-1 w-full font-medium hover:bg-yellow-500"
      css={[
        isLinkActive &&
          tw`bg-black text-white font-semibold hover:bg-black hover:text-yellow-500`,
      ]}
      to={to}
    >
      {children}
    </Link>
  )
}
