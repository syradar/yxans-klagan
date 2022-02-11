import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { Card } from '../../components/card'
import { Field } from '../../components/field'
import { Group } from '../../components/group'
import { Parchment } from '../../components/parchment'
import { Grid, Pancake, Train } from '../../components/Stack'
import { Stat } from '../../components/Stat'
import { Tag } from '../../components/Tag'
import { AllSkillsValuesViewModel } from '../../models/skills.model'
import { ID } from '../../models/utils.model'
import { TypicalKinViewModel } from './typical-kin'

export interface TypicalKinProps {
  tkvm: TypicalKinViewModel
}

export const TypicalKinDisplay = (typicalKinViewModel: TypicalKinProps) => {
  const { t, i18n } = useTranslation(['typical', 'common'])

  const [tkvm, setTkvm] = useState(typicalKinViewModel.tkvm)

  const formatSkills = (asvm: AllSkillsValuesViewModel): string =>
    asvm
      .map(
        ([skill, value]) =>
          `${t(`Skills.${skill}`, { ns: 'common' })} ${value}`,
      )
      .join(', ')

  const formatTalents = (talents: string[]): string =>
    talents.length > 0
      ? talents
          .map((talent) => t(`Talents.${talent}`, { ns: 'common' }))
          .join(', ')
      : '–'

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
    <Parchment deps={[tkvm, i18n.language]}>
      <Group
        label={
          <h3 tw="text-xl" className="yx-heading">
            {t(`Kin.${tkvm.kinType}.${tkvm.kin}`, { ns: 'common' })}
          </h3>
        }
        useDefaultLabel={false}
        indent={false}
        open={false}
        spaceBeforeItems={true}
        onCollapse={() => toggleKin()}
      >
        <Pancake spacing="small">
          <Card thin>
            <Train distribute>
              <Stat label={t('Attributes.Strength', { ns: 'common' })}>
                {tkvm.attributes.strength?.value}
              </Stat>
              <Stat label={t('Attributes.Agility', { ns: 'common' })}>
                {tkvm.attributes.agility?.value}
              </Stat>
              <Stat label={t('Attributes.Wits', { ns: 'common' })}>
                {tkvm.attributes.wits?.value}
              </Stat>
              <Stat label={t('Attributes.Empathy', { ns: 'common' })}>
                {tkvm.attributes.empathy?.value}
              </Stat>
            </Train>
          </Card>
          {tkvm.description && (
            <Field label={t('Description.Description', { ns: 'common' })}>
              {t(`Description.${tkvm.description}`, { ns: 'common' })}
            </Field>
          )}
          <Field label={t('Skills.Skills', { ns: 'common' })}>
            {formatSkills(tkvm.skills)}
          </Field>
          <Field label={t('Talents.Talents', { ns: 'common' })}>
            {formatTalents(tkvm.talents)}
          </Field>
          {tkvm.gear.length > 0 && (
            <Field label={t('Gear.Gear', { ns: 'common' })}>
              {tkvm.gear
                .map((g) => t(`Gear.${g}`, { ns: 'common' }))
                .join(', ')}
            </Field>
          )}
          <Pancake spacing="small">
            {tkvm.weapons.map((w) => (
              <Group
                key={w.id}
                useDefaultLabel={false}
                label={
                  <div tw="w-full">
                    <Grid cols="3">
                      <h3 tw="font-bold">
                        {t(`Weapon.${w.category}.${w.name}`, { ns: 'common' })}
                      </h3>
                      {w.collapse && w.bonus && (
                        <h3 tw="font-medium text-center">
                          {formatBonus(w.bonus)}
                        </h3>
                      )}
                      {w.collapse && (
                        <h3 tw="font-medium text-right">
                          {w.damage}{' '}
                          {t('Weapon.Damage', { ns: 'common' }).toLowerCase()}
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
                    <Stat label={t(`Weapon.Grip`, { ns: 'common' })}>
                      {w.grip}
                    </Stat>
                    <Stat label={t(`Weapon.Bonus`, { ns: 'common' })}>
                      {w.bonus ?? '–'}
                    </Stat>
                    <Stat label={t(`Weapon.Damage`, { ns: 'common' })}>
                      {w.damage}
                    </Stat>
                    <Stat label={t(`Range.Range`, { ns: 'common' })}>
                      {t(`Range.${w.range}`, { ns: 'common' })}
                    </Stat>
                  </Train>
                  {w.features.length > 0 && (
                    <Train spacing="small">
                      {w.features.map((f) => (
                        <Tag key={f}>
                          {t(`Weapon.Feature.${f}`, { ns: 'common' })}
                        </Tag>
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
                  <div tw="w-full">
                    <Grid cols="2">
                      <h3 tw="font-bold">
                        {t(`Shield.${s.type}`, { ns: 'common' })}
                      </h3>
                      {s.collapse && (
                        <h3 tw="font-medium text-right">
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
                    <Stat label={t(`Weapon.Bonus`, { ns: 'common' })}>
                      {s.bonus}
                    </Stat>
                  </Train>
                  {s.features.length > 0 && (
                    <Train>
                      {s.features.map((s) => (
                        <Tag key={s}>
                          {t(`ArmorFeature.${s}`, { ns: 'common' })}
                        </Tag>
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
                  <div tw="w-full">
                    <Grid cols="2">
                      <h3 tw="font-bold">
                        {t(`Armor.${a.type}`, { ns: 'common' })}
                      </h3>
                      {a.collapse && (
                        <h3 tw="font-medium text-right">{a.rating}</h3>
                      )}
                    </Grid>
                  </div>
                }
                open={!a.collapse}
                onCollapse={() => toggleGear('armors', a.id)}
              >
                <Pancake spacing="small">
                  <Train distribute>
                    <Stat label={t(`Armor.Rating`, { ns: 'common' })}>
                      {a.rating}
                    </Stat>
                    <Stat label={t(`Armor.BodyPart`, { ns: 'common' })}>
                      {t(`Armor.Body`, { ns: 'common' })}
                    </Stat>
                  </Train>
                  {a.features.length > 0 && (
                    <Train spacing="small">
                      {a.features.map((feature) => (
                        <Tag key={feature}>
                          {t(`ArmorFeature.${feature}`, { ns: 'common' })}
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
                  <div tw="w-full">
                    <Grid cols="2">
                      <h3 tw="font-bold">
                        {t(`Helmet.${h.type}`, { ns: 'common' })}
                      </h3>
                      {h.collapse && (
                        <h3 tw="font-medium text-right">{h.rating}</h3>
                      )}
                    </Grid>
                  </div>
                }
                open={!h.collapse}
                onCollapse={() => toggleGear('helmets', h.id)}
              >
                <Pancake spacing="small">
                  <Train distribute>
                    <Stat label={t(`Armor.Rating`, { ns: 'common' })}>
                      {h.rating}
                    </Stat>
                    <Stat label={t(`Helmet.BodyPart`, { ns: 'common' })}>
                      {t(`Helmet.Body`, { ns: 'common' })}
                    </Stat>
                  </Train>
                  {h.features.length > 0 && (
                    <Train spacing="small">
                      {h.features.map((feature) => (
                        <Tag key={feature}>
                          {t(`ArmorFeature.${feature}`, { ns: 'common' })}
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
