import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'

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

export default HomePage
