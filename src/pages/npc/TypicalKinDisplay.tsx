import { useState } from 'react'
import Stack, { Grid, Pancake, Train } from '../../components/Stack'
import { Stat } from '../../components/Stat'
import { Tag } from '../../components/Tag'
import { ParchmentCard } from '../../components/card'
import { Field } from '../../components/field'
import { Group } from '../../components/group'
import { Parchment } from '../../components/parchment'
import { rangeTranslationDict } from '../../models/attack-range'
import {
  AllSkillsValuesViewModel,
  skillsTranslationDict,
} from '../../models/skills.model'
import { ID } from '../../models/utils.model'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import {
  armorFeaturesTranslationDict,
  armorTypeTranslationDict,
  helmetTypeTranslationDict,
} from './armor'
import { TypicalKinViewModel } from './typical-kin'
import { weaponFeatureTranslationDict, weaponName } from './weapon'
import { shieldTypesTranslationDict } from './shield'

export interface TypicalKinProps {
  tkvm: TypicalKinViewModel
}

export const TypicalKinDisplay = (typicalKinViewModel: TypicalKinProps) => {
  const t = useAppSelector(selectTranslateFunction(['npc', 'common']))

  const [tkvm, setTkvm] = useState(typicalKinViewModel.tkvm)

  const formatSkills = (asvm: AllSkillsValuesViewModel): string =>
    asvm
      .map(
        ({ skill, value }) =>
          `${t(
            skillsTranslationDict[skill as keyof typeof skillsTranslationDict],
          )} ${value}`,
      )
      .join(', ')

  const toggleKin = () => {
    setTkvm({ ...tkvm, collapse: !tkvm.collapse })
  }

  const formatBonus = (bonus: number): string =>
    `${Math.sign(bonus) === 1 ? '+' : ''}${bonus}`

  const toggleGear = (
    gear: 'weapons' | 'armors' | 'shields' | 'helmets',
    id: ID,
  ) => {
    setTkvm((state) => ({
      ...state,
      [gear]: state[gear].map((w) => {
        if (id === w.id) {
          return { ...w, collapse: !w.collapse }
        }

        return w
      }),
    }))
  }

  return (
    <Parchment>
      <Group
        label={
          <h3 className="yx-heading text-xl">
            <>{t(tkvm.title)}</>
          </h3>
        }
        useDefaultLabel={false}
        open={false}
        spaceBeforeItems={true}
        onCollapse={() => toggleKin()}
      >
        <Pancake spacing="small">
          <ParchmentCard>
            <Stack.Horizontal distribute full>
              <Stat label={t('common:attributes.strength')}>
                {tkvm.attributes.strength?.value}
              </Stat>
              <Stat label={t('common:attributes.agility')}>
                {tkvm.attributes.agility?.value}
              </Stat>
              <Stat label={t('common:attributes.wits')}>
                {tkvm.attributes.wits?.value}
              </Stat>
              <Stat label={t('common:attributes.empathy')}>
                {tkvm.attributes.empathy?.value}
              </Stat>
            </Stack.Horizontal>
          </ParchmentCard>

          {tkvm.description ? (
            <Field label={t('common:description.description')}>
              <>{t(tkvm.description)}</>
            </Field>
          ) : null}

          <Field label={t('common:skills.skills')}>
            {formatSkills(tkvm.skills)}
          </Field>

          <Field label={t('common:talents.talents')}>
            {tkvm.talents.length > 0
              ? tkvm.talents.map((talent) => t(talent)).join(', ')
              : '–'}
          </Field>

          {tkvm.gear.length > 0 ? (
            <Field label={t('common:gear.gear')}>
              {tkvm.gear.map((g) => t(g)).join(', ')}
            </Field>
          ) : null}

          <Pancake spacing="small">
            {tkvm.weapons.map((w) => (
              <Group
                key={w.id}
                useDefaultLabel={false}
                label={
                  <div className="w-full">
                    <Grid cols="3">
                      <h3 className="font-bold">
                        {t(weaponName(w.category, w.name))}
                      </h3>
                      {w.collapse && w.bonus ? (
                        <h3 className="text-center font-medium">
                          {formatBonus(w.bonus)}
                        </h3>
                      ) : null}
                      {w.collapse ? (
                        <h3 className="text-right font-medium">
                          {w.damage}{' '}
                          {t('common:weapon.damage').toString().toLowerCase()}
                        </h3>
                      ) : null}
                    </Grid>
                  </div>
                }
                open={!w.collapse}
                onCollapse={() => toggleGear('weapons', w.id)}
              >
                <Pancake spacing="small">
                  <Train distribute>
                    <Stat label={t(`common:weapon.grip`)}>{w.grip}</Stat>
                    <Stat label={t(`common:weapon.bonus`)}>
                      {w.bonus ?? '–'}
                    </Stat>
                    <Stat label={t(`common:weapon.damage`)}>{w.damage}</Stat>
                    <Stat label={t(`common:range.range`)}>
                      <>{t(rangeTranslationDict[w.range])}</>
                    </Stat>
                  </Train>
                  {w.features.length > 0 ? (
                    <Train spacing="small">
                      {w.features.map((f) => (
                        <Tag key={f}>{t(weaponFeatureTranslationDict[f])}</Tag>
                      ))}
                    </Train>
                  ) : null}
                </Pancake>
              </Group>
            ))}
          </Pancake>
          <Pancake spacing="small">
            {tkvm.shields.map((s) => (
              <Group
                key={s.id}
                useDefaultLabel={false}
                label={
                  <div className="w-full">
                    <Grid cols="2">
                      <h3 className="font-bold">
                        {t(shieldTypesTranslationDict[s.type])}
                      </h3>
                      {s.collapse ? (
                        <h3 className="text-right font-medium">
                          {formatBonus(s.bonus)}
                        </h3>
                      ) : null}
                    </Grid>
                  </div>
                }
                open={!s.collapse}
                onCollapse={() => toggleGear('shields', s.id)}
              >
                <Pancake spacing="small">
                  <Train>
                    <Stat label={t(`common:weapon.bonus`)}>{s.bonus}</Stat>
                  </Train>
                  {s.features.length > 0 ? (
                    <Train>
                      {s.features.map((s) => (
                        <Tag key={s}>{t(weaponFeatureTranslationDict[s])}</Tag>
                      ))}
                    </Train>
                  ) : null}
                </Pancake>
              </Group>
            ))}
          </Pancake>
          <Pancake spacing="small">
            {tkvm.armors.map((a) => (
              // helmetTypeTranslationDict

              <Group
                key={a.id}
                useDefaultLabel={false}
                label={
                  <div className="w-full">
                    <Grid cols="2">
                      <h3 className="font-bold">
                        {t(armorTypeTranslationDict[a.type])}
                      </h3>
                      {a.collapse ? (
                        <h3 className="text-right font-medium">{a.rating}</h3>
                      ) : null}
                    </Grid>
                  </div>
                }
                open={!a.collapse}
                onCollapse={() => toggleGear('armors', a.id)}
              >
                <Pancake spacing="small">
                  <Train distribute>
                    <Stat label={t(`common:armor.rating`)}>{a.rating}</Stat>
                    <Stat label={t(`common:armor.body_part`)}>
                      {t(`common:armor.body`)}
                    </Stat>
                  </Train>
                  {a.features.length > 0 ? (
                    <Train spacing="small">
                      {a.features.map((feature) => (
                        <Tag key={feature}>
                          {t(armorFeaturesTranslationDict[feature])}
                        </Tag>
                      ))}
                    </Train>
                  ) : null}
                </Pancake>
              </Group>
            ))}
          </Pancake>
          <Pancake spacing="small">
            {tkvm.helmets.map((h) => (
              <Group
                key={h.id}
                useDefaultLabel={false}
                label={
                  <div className="w-full">
                    <Grid cols="2">
                      <h3 className="font-bold">
                        {t(helmetTypeTranslationDict[h.type])}
                      </h3>
                      {h.collapse ? (
                        <h3 className="text-right font-medium">{h.rating}</h3>
                      ) : null}
                    </Grid>
                  </div>
                }
                open={!h.collapse}
                onCollapse={() => toggleGear('helmets', h.id)}
              >
                <Pancake spacing="small">
                  <Train distribute>
                    <Stat label={t(`common:armor.rating`)}>{h.rating}</Stat>
                    <Stat label={t(`common:helmet.body_part`)}>
                      {t(`common:helmet.body`)}
                    </Stat>
                  </Train>
                  {h.features.length > 0 ? (
                    <Train spacing="small">
                      {h.features.map((feature) => (
                        <Tag key={feature}>
                          {t(armorFeaturesTranslationDict[feature])}
                        </Tag>
                      ))}
                    </Train>
                  ) : null}
                </Pancake>
              </Group>
            ))}
          </Pancake>
        </Pancake>
      </Group>
    </Parchment>
  )
}
