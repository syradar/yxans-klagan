import Stack from '../components/Stack'
import { Typography } from '../components/Typography'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'

const HomePage = () => {
  const t = useAppSelector(selectTranslateFunction(['home', 'core']))

  return (
    <div className="flex max-w-prose flex-col gap-y-8">
      <div>{t('core:GiveFeedback')}</div>
      <PageHeader>{t('home:Page')}</PageHeader>
      <Parchment>
        <p className="yx-prose">{t('home:Description')}</p>
      </Parchment>
      <Parchment>
        <div className="flex flex-col gap-4">
          <Typography variant="h2" parchment>
            {t('home:GameTitle')}
          </Typography>
          <p className="yx-prose">{t('home:GameDescription')}</p>
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
        </div>
      </Parchment>
      <Parchment>
        <Typography variant="h2" parchment>
          {t('home:CommunityTitle')}
        </Typography>
        <p className="yx-prose mb-4">{t('home:ThanksCommunity')}</p>
        <Stack.Horizontal className="yx-prose" wrap>
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
        </Stack.Horizontal>
      </Parchment>
      <div></div>
    </div>
  )
}

export default HomePage
