import React, { Children, FC } from 'react'
import {
  Link,
  LinkProps,
  useLocation,
  useResolvedPath,
  useRoutes,
} from 'react-router-dom'
import tw, { css } from 'twin.macro'
import './App.css'
import { PageHeader, Parchment } from './components'
import YxansKlaganLogo from './logo'
import { CalendarPage } from './pages/calendar.page'
import { DiceRollerPage } from './pages/dice-roller.page'
import { GearPage } from './pages/gear.page'
import { NameGeneratorPage } from './pages/name-generator.page'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  // container: ({ hasBackground }: { hasBackground: boolean }) => [
  container: () => [
    tw`flex flex-col min-h-screen h-full w-screen`,
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
  ])

  return (
    <div className="App" css={styles.container()}>
      <div tw="flex h-full">
        <div tw="flex flex-col">
          <div tw="p-2 w-64">
            <YxansKlaganLogo />
          </div>
          <nav tw="w-1/4 text-xl flex flex-col gap-y-4" className="yx-heading">
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/names">Namn</MenuLink>
            <MenuLink to="/gear">Utrustning</MenuLink>
            <MenuLink to="/calendar">Kalender</MenuLink>
            <MenuLink to="/dice">Tärningar</MenuLink>
          </nav>
        </div>
        <main tw="w-3/4 mt-4">{routes}</main>
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
  </div>
)

const MenuLink: FC<LinkProps> = ({ to, children }: LinkProps) => {
  const { pathname } = useLocation()
  const { pathname: toPathname } = useResolvedPath(to)

  const isLinkActive = pathname === toPathname

  return (
    <Link
      css={[isLinkActive && tw`text-red-700`, tw`hover:text-red-500`]}
      to={to}
    >
      {children}
    </Link>
  )
}
