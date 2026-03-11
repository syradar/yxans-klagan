import { LinkWithIcon } from '../../../components/LinkWithIcon'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'

export const BackToAllMonsters = () => {
  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))

  return (
    <div>
      <LinkWithIcon to="/monsters" icon="back">
        {t('monsters:back_to_all_monsters')}
      </LinkWithIcon>
    </div>
  )
}
