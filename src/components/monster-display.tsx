import { useTranslation } from 'react-i18next'
import { MonsterViewModel } from '../models/monster.model'
import { MonsterAttribute } from './monster-attributes'
import { Pancake } from './Stack'
export type MonsterDisplayProps = {
  m: MonsterViewModel
}

export const MonsterDisplay = ({ m }: MonsterDisplayProps) => {
  const { t } = useTranslation(['monsters', 'common'])

  return (
    <div>
      <header className="mb-4">
        <h2 className="yx-heading mb-2 text-4xl">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            t(m.name as any) as string
          }
        </h2>
        {m.pageReference && (
          <div>
            <>
              {t('Page', { ns: 'common' })}: {m.pageReference}{' '}
              {t('GMBook', { ns: 'common' })}
            </>
          </div>
        )}
      </header>
      <h3 className="text-xl font-bold">{t(`common:Attribute`)}</h3>

      <Pancake spacing="small">
        {m.attributes.strength && (
          <MonsterAttribute
            key={`${m.name}-strength`}
            values={[...m.attributes.strength.values]}
            label={t(`common:Attributes.${m.attributes.strength.label}`)}
          />
        )}
        {m.attributes.agility && (
          <MonsterAttribute
            key={`${m.name}-agility`}
            values={[...m.attributes.agility.values]}
            label={t(`common:Attributes.${m.attributes.agility.label}`)}
          />
        )}
        {m.attributes.wits && (
          <MonsterAttribute
            key={`${m.name}-wits`}
            values={[...m.attributes.wits.values]}
            label={t(`common:Attributes.${m.attributes.wits.label}`)}
          />
        )}
        {m.attributes.empathy && (
          <MonsterAttribute
            key={`${m.name}-empathy`}
            values={[...m.attributes.empathy.values]}
            label={t(`common:Attributes.${m.attributes.empathy.label}`)}
          />
        )}
      </Pancake>
    </div>
  )
}
