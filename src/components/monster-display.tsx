import { withId } from '../functions/utils.functions'
import { MonsterViewModel } from '../models/monster.model'
import { useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'
import { MonsterAttribute } from './monster-attributes'
import { Pancake } from './Stack'
export type MonsterDisplayProps = {
  m: MonsterViewModel
}

export const MonsterDisplay = ({ m }: MonsterDisplayProps) => {
  const t = useAppSelector(selectTranslateFunction(['monster', 'common']))

  return (
    <div>
      <header className="mb-4">
        <h2 className="yx-heading mb-2 text-4xl">{t(m.name)}</h2>
        {m.pageReference && (
          <div>
            <>
              {t('common:Page')}: {m.pageReference} {t('common:GMBook')}
            </>
          </div>
        )}
      </header>
      <h3 className="text-xl font-bold">{t(`common:Attribute`)}</h3>

      <Pancake spacing="small">
        {m.attributes.strength && (
          <MonsterAttribute
            key={`${m.name}-strength`}
            values={m.attributes.strength.values.map(withId)}
            label={t(`common:Attributes.${m.attributes.strength.label}`)}
          />
        )}
        {m.attributes.agility && (
          <MonsterAttribute
            key={`${m.name}-agility`}
            values={m.attributes.agility.values.map(withId)}
            label={t(`common:Attributes.${m.attributes.agility.label}`)}
          />
        )}
        {m.attributes.wits && (
          <MonsterAttribute
            key={`${m.name}-wits`}
            values={m.attributes.wits.values.map(withId)}
            label={t(`common:Attributes.${m.attributes.wits.label}`)}
          />
        )}
        {m.attributes.empathy && (
          <MonsterAttribute
            key={`${m.name}-empathy`}
            values={m.attributes.empathy.values.map(withId)}
            label={t(`common:Attributes.${m.attributes.empathy.label}`)}
          />
        )}
      </Pancake>
    </div>
  )
}
