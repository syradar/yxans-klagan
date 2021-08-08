import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import tw from 'twin.macro'
import './App.css'
import { Button } from './components'
import { DiceDisplay } from './components/Dice'
import YxansKlaganLogo from './logo'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  // container: ({ hasBackground }: { hasBackground: boolean }) => [
  container: () => [
    tw`flex flex-col h-screen w-screen`,
    // hasBackground && tw`wbg-gradient-to-b from-electric to-ribbon`,
    tw`bg-yellow-50`,
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
  ])

  return (
    <div css={styles.container()}>
      <div tw="p-2 w-64">
        <YxansKlaganLogo />
      </div>
      <div tw="flex h-full">
        <nav tw="w-1/4">
          <Link to="/">Home</Link>
          <Link to="/dice">Tärning</Link>
        </nav>
        <main tw="w-3/4">
          <div tw="max-w-prose bg-white p-4">{routes}</div>
        </main>
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
    <p className="yx-prose">
      Välkomna till Svärdets sång. I detta bordsrollspel är ni inte hjältar som
      utför uppdrag på order av andra – i stället är ni äventyrare och
      skattletare fast beslutna att sätta ert eget märke på denna fördömda
      värld. Ni kommer att vandra genom det vilda landet, utforska glömda
      gravar, kämpa mot fruktansvärda monster och – om ni lever länge nog –
      bygga ert eget fäste och försvara det mot fiender. Under era äventyr kan
      ni avslöja de mörka krafter som rör sig i skuggorna och till slut kan det
      bli ni som avgör Det glömda landets öde.
    </p>
  </>
)
const DiceRollerPage = () => (
  <>
    <h1 tw="text-4xl" className="yx-heading">
      Tärningsrullare
    </h1>
    <DiceDisplay value={4}></DiceDisplay>
    <Button variant="primary">Slå tärning</Button>
    <Button variant="secondary">Pressa slag</Button>
    <Button isSmall>stäng</Button>
  </>
)
