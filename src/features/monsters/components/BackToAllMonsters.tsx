import { LinkWithIcon } from '../../../components/LinkWithIcon'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'

export const BackToAllMonsters = () => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

  return (
    <div>
      <LinkWithIcon to="/monsters" icon="back">
        {t('monster:back_to_all_monsters')}
      </LinkWithIcon>
    </div>
  )
}
