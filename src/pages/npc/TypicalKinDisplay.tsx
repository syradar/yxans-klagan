import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../../@types/i18next'
import { ParchmentCard } from '../../components/card'
import { Field } from '../../components/field'
import { Group } from '../../components/group'
import { Parchment } from '../../components/parchment'
import Stack, { Grid, Pancake, Train } from '../../components/Stack'
import { Stat } from '../../components/Stat'
import { Tag } from '../../components/Tag'
import { AllSkillsValuesViewModel } from '../../models/skills.model'
import { ID } from '../../models/utils.model'
import { TypicalKinViewModel } from './typical-kin'

export interface TypicalKinProps {
  tkvm: TypicalKinViewModel
}

export const TypicalKinDisplay = (typicalKinViewModel: TypicalKinProps) => {
  const { t } = useTranslation(['typical', 'common'])

  const [tkvm, setTkvm] = useState(typicalKinViewModel.tkvm)

  const formatSkills = (asvm: AllSkillsValuesViewModel): string =>
    asvm
      .map(([skill, value]) => `${t(`common:Skills.${skill}`)} ${value}`)
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
              <Stat label={t('common:Attributes.Strength')}>
                {tkvm.attributes.strength?.value}
              </Stat>
              <Stat label={t('common:Attributes.Agility')}>
                {tkvm.attributes.agility?.value}
              </Stat>
              <Stat label={t('common:Attributes.Wits')}>
                {tkvm.attributes.wits?.value}
              </Stat>
              <Stat label={t('common:Attributes.Empathy')}>
                {tkvm.attributes.empathy?.value}
              </Stat>
            </Stack.Horizontal>
          </ParchmentCard>
          {tkvm.description && (
            <Field label={t('common:Description.Description')}>
              <>{t(tkvm.description)}</>
            </Field>
          )}
          <Field label={t('common:Skills.Skills')}>
            {formatSkills(tkvm.skills)}
          </Field>
          <Field label={t('common:Talents.Talents')}>
            {tkvm.talents.length > 0
              ? tkvm.talents.map((talent) => t(talent)).join(', ')
              : '–'}
          </Field>
          {tkvm.gear.length > 0 && (
            <Field label={t('common:Gear.Gear')}>
              {tkvm.gear.map((g) => t(g)).join(', ')}
            </Field>
          )}
          <Pancake spacing="small">
            {tkvm.weapons.map((w) => (
              <Group
                key={w.id}
                useDefaultLabel={false}
                label={
                  <div className="w-full">
                    <Grid cols="3">
                      <h3 className="font-bold">
                        <>
                          {t(
                            `common:Weapon.${w.category}.${w.name}` as TranslationKey<'common'>,
                          )}
                        </>
                      </h3>
                      {w.collapse && w.bonus && (
                        <h3 className="text-center font-medium">
                          {formatBonus(w.bonus)}
                        </h3>
                      )}
                      {w.collapse && (
                        <h3 className="text-right font-medium">
                          {w.damage}{' '}
                          {t('common:Weapon.Damage').toString().toLowerCase()}
                        </h3>
                      )}
                    </Grid>
                  </div>
                }
                open={!w.collapse}
                onCollapse={() => toggleGear('weapons', w.id)}
              >
                <Pancake spacing="small">
                  <Train distribute>
                    <Stat label={t(`common:Weapon.Grip`)}>{w.grip}</Stat>
                    <Stat label={t(`common:Weapon.Bonus`)}>
                      {w.bonus ?? '–'}
                    </Stat>
                    <Stat label={t(`common:Weapon.Damage`)}>{w.damage}</Stat>
                    <Stat label={t(`common:Range.Range`)}>
                      <>
                        {t(
                          `common:Range.${w.range}` as TranslationKey<'common'>,
                        )}
                      </>
                    </Stat>
                  </Train>
                  {w.features.length > 0 && (
                    <Train spacing="small">
                      {w.features.map((f) => (
                        <Tag key={f}>{t(`common:Weapon.Feature.${f}`)}</Tag>
                      ))}
                    </Train>
                  )}
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
                        {t(`common:Shield.${s.type}`)}
                      </h3>
                      {s.collapse && (
                        <h3 className="text-right font-medium">
                          {formatBonus(s.bonus)}
                        </h3>
                      )}
                    </Grid>
                  </div>
                }
                open={!s.collapse}
                onCollapse={() => toggleGear('shields', s.id)}
              >
                <Pancake spacing="small">
                  <Train>
                    <Stat label={t(`common:Weapon.Bonus`)}>{s.bonus}</Stat>
                  </Train>
                  {s.features.length > 0 && (
                    <Train>
                      {s.features.map((s) => (
                        <Tag key={s}>{t(`common:ArmorFeature.${s}`)}</Tag>
                      ))}
                    </Train>
                  )}
                </Pancake>
              </Group>
            ))}
          </Pancake>
          <Pancake spacing="small">
            {tkvm.armors.map((a) => (
              <Group
                key={a.id}
                useDefaultLabel={false}
                label={
                  <div className="w-full">
                    <Grid cols="2">
                      <h3 className="font-bold">
                        {t(`common:Armor.${a.type}`)}
                      </h3>
                      {a.collapse && (
                        <h3 className="text-right font-medium">{a.rating}</h3>
                      )}
                    </Grid>
                  </div>
                }
                open={!a.collapse}
                onCollapse={() => toggleGear('armors', a.id)}
              >
                <Pancake spacing="small">
                  <Train distribute>
                    <Stat label={t(`common:Armor.Rating`)}>{a.rating}</Stat>
                    <Stat label={t(`common:Armor.BodyPart`)}>
                      {t(`common:Armor.Body`)}
                    </Stat>
                  </Train>
                  {a.features.length > 0 && (
                    <Train spacing="small">
                      {a.features.map((feature) => (
                        <Tag key={feature}>
                          {t(`common:ArmorFeature.${feature}`)}
                        </Tag>
                      ))}
                    </Train>
                  )}
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
                        {t(`common:Helmet.${h.type}`)}
                      </h3>
                      {h.collapse && (
                        <h3 className="text-right font-medium">{h.rating}</h3>
                      )}
                    </Grid>
                  </div>
                }
                open={!h.collapse}
                onCollapse={() => toggleGear('helmets', h.id)}
              >
                <Pancake spacing="small">
                  <Train distribute>
                    <Stat label={t(`common:Armor.Rating`)}>{h.rating}</Stat>
                    <Stat label={t(`common:Helmet.BodyPart`)}>
                      {t(`common:Helmet.Body`)}
                    </Stat>
                  </Train>
                  {h.features.length > 0 && (
                    <Train spacing="small">
                      {h.features.map((feature) => (
                        <Tag key={feature}>
                          {t(`common:ArmorFeature.${feature}`)}
                        </Tag>
                      ))}
                    </Train>
                  )}
                </Pancake>
              </Group>
            ))}
          </Pancake>
        </Pancake>
      </Group>
    </Parchment>
  )
}
