import { Typography } from '../components/Typography'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'

const HomePage = () => {
  const t = useAppSelector(selectTranslateFunction(['home', 'core']))

  return (
    <div className="flex max-w-prose flex-col gap-4">
      <PageHeader>{t('home:Page')}</PageHeader>
      <Parchment>
        <p className="yx-prose">{t('home:Description')}</p>
      </Parchment>
      <Parchment>
        <Typography variant="h2" parchment>
          {t('home:GameTitle')}
        </Typography>

        <p className="yx-prose mb-4">{t('home:GameDescription')}</p>

        <p className="yx-prose">
          {t('home:ThanksTo')}{' '}
          <a
            className="text-red-700 hover:underline"
            href="https://freeleaguepublishing.com/sv/"
          >
            {t('home:FreeLeague')}
          </a>{' '}
          {t('home:ForAFantasticGame')}
        </p>
      </Parchment>
      <Parchment>
        <Typography variant="h2" parchment>
          {t('home:CommunityTitle')}
        </Typography>

        <p className="yx-prose mb-4">{t('home:ThanksCommunity')}</p>

        <div className="yx-prose flex flex-wrap gap-4">
          <a
            className="text-red-700 hover:underline"
            href="https://discord.gg/RnaydHR"
          >
            Discord
          </a>
          <a
            className="text-red-700 hover:underline"
            href="https://www.reddit.com/r/ForbiddenLands/"
          >
            Reddit
          </a>
          <a
            className="text-red-700 hover:underline"
            href="https://www.facebook.com/groups/469674263432738/"
          >
            Facebook
          </a>
          <a
            className="text-red-700 hover:underline"
            href="https://forum.frialigan.se/"
          >
            Forum
          </a>
        </div>
      </Parchment>

      <Parchment>
        <Typography variant="h2" parchment>
          {t('home:moreTools.title')}
        </Typography>

        <Typography variant="h3" parchment>
          <a
            className="text-red-700 hover:underline"
            href="https://dragontools.vercel.app/"
          >
            {t('home:moreTools.dragonTools.name')}
          </a>
        </Typography>

        <p className="yx-prose mb-4 text-lg">
          {t('home:moreTools.dragonTools.description')}
        </p>
      </Parchment>
    </div>
  )
}

export default HomePage
