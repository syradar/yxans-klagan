import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import tw from 'twin.macro'
import './App.css'
import { Parchment } from './components'
import YxansKlaganLogo from './logo'
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
  ])

  return (
    <div className="App" css={styles.container()}>
      <div tw="flex h-full">
        <div tw="flex flex-col">
          <div tw="p-2 w-64">
            <YxansKlaganLogo />
          </div>
          <nav
            tw="w-1/4 text-xl border-t-2 border-b-2 mb-4 border-black flex flex-col gap-y-4"
            className="yx-heading"
          >
            <Link tw="hover:text-red-700" to="/">
              Home
            </Link>
            <Link tw="hover:text-red-700" to="/names">
              Namn
            </Link>
            <Link tw="hover:text-red-700" to="/gear">
              Utrustning
            </Link>
            <Link tw="hover:text-red-700" to="/dice">
              Tärningar
            </Link>
          </nav>
        </div>
        <main tw="w-3/4">{routes}</main>
      </div>
    </div>
  )
}

export default App

const HomePage = () => (
  <>
    <h1 tw="text-4xl text-center mb-4" className="yx-heading">
      SVÄRDETS SÅNG
    </h1>
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
  </>
)
