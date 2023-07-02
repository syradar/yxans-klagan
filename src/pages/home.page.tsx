import { Typography } from '../components/Typography'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'

const HomePage = () => {
  const t = useAppSelector(selectTranslateFunction(['home', 'core']))

  return (
    <div className="flex max-w-prose flex-col gap-4">
      <PageHeader>{t('home:page')}</PageHeader>
      <Parchment>
        <p className="yx-prose">{t('home:description')}</p>
      </Parchment>
      <Parchment>
        <Typography variant="h2" parchment>
          {t('home:game_title')}
        </Typography>

        <p className="yx-prose mb-4">{t('home:game_description')}</p>

        <p className="yx-prose">
          {t('home:thanks_to')}{' '}
          <a
            className="text-red-700 hover:underline"
            href="https://freeleaguepublishing.com/sv/"
          >
            {t('home:free_league')}
          </a>{' '}
          {t('home:for_afantastic_game')}
        </p>
      </Parchment>
      <Parchment>
        <Typography variant="h2" parchment>
          {t('home:community_title')}
        </Typography>

        <p className="yx-prose mb-4">{t('home:thanks_community')}</p>

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
          {t('home:more_tools.title')}
        </Typography>

        <Typography variant="h3" parchment>
          <a
            className="text-red-700 hover:underline"
            href="https://dragontools.vercel.app/"
          >
            {t('home:more_tools.dragon_tools.name')}
          </a>
        </Typography>

        <p className="yx-prose mb-4 text-lg">
          {t('home:more_tools.dragon_tools.description')}
        </p>
      </Parchment>
    </div>
  )
}

export default HomePage
