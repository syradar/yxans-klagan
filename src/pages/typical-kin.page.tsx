import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { PageHeader } from '../components/page-header'
import { Pancake } from '../components/stack'
import { TypicalKinDisplay } from '../components/typical-kin-display'
import {
  dwarfTypicalKins,
  elfTypicalKins,
  halflingAndGoblinTypicalKins,
  humanTypicalKins,
  ogreTypicalKins,
  orcTypicalKins,
  saurianTypicalKins,
  whinerTypicalKins,
  wolfkinTypicalKins,
} from '../data/typical-kin.data'
import { createTypicalKinViewModel } from '../functions/typical-kin.functions'

export const TypicalKinPage = () => {
  const { t } = useTranslation(['typical', 'common'])

  const humanKinViewModels = Object.values(humanTypicalKins).map(
    createTypicalKinViewModel,
  )

  const elfKinViewModels = Object.values(elfTypicalKins).map(
    createTypicalKinViewModel,
  )

  const dwarfKinViewModels = Object.values(dwarfTypicalKins).map(
    createTypicalKinViewModel,
  )

  const orcKinViewModels = Object.values(orcTypicalKins).map(
    createTypicalKinViewModel,
  )
  const ogreKinViewModels = Object.values(ogreTypicalKins).map(
    createTypicalKinViewModel,
  )
  const wolfkinKinViewModels = Object.values(wolfkinTypicalKins).map(
    createTypicalKinViewModel,
  )
  const saurianKinViewModels = Object.values(saurianTypicalKins).map(
    createTypicalKinViewModel,
  )
  const whinerKinViewModels = Object.values(whinerTypicalKins).map(
    createTypicalKinViewModel,
  )
  const halflingAndGoblinKinViewModels = Object.values(
    halflingAndGoblinTypicalKins,
  ).map(createTypicalKinViewModel)

  return (
    <div tw="flex flex-col gap-y-8 w-full pb-16">
      <PageHeader>{t('Title')}</PageHeader>
      <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
        {t('Kin.Human.Humans', { ns: 'common' })}
      </h2>
      <div tw="grid gap-4 md:grid-cols-2  2xl:grid-cols-3">
        {humanKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>
      <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
        {t('Kin.Elf.Elves', { ns: 'common' })}
      </h2>
      <div tw="grid gap-4 md:grid-cols-2  2xl:grid-cols-3">
        {elfKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>
      <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
        {t('Kin.Dwarf.Dwarves', { ns: 'common' })}
      </h2>
      <div tw="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {dwarfKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>
      <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
        {t('Kin.Orc.Orcs', { ns: 'common' })}
      </h2>
      <div tw="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {orcKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>

      <div tw="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        <Pancake>
          <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
            {t('Kin.Ogre.Ogres', { ns: 'common' })}
          </h2>
          {ogreKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </Pancake>
        <Pancake>
          <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
            {t('Kin.Wolfkin.Wolfkins', { ns: 'common' })}
          </h2>

          {wolfkinKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </Pancake>
      </div>
      <div tw="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        <Pancake>
          <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
            {t('Kin.Saurian.Saurians', { ns: 'common' })}
          </h2>
          {saurianKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </Pancake>
        <Pancake>
          <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
            {t('Kin.Whiner.Whiners', { ns: 'common' })}
          </h2>
          {whinerKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </Pancake>
      </div>
      <h2 tw="text-center text-2xl lg:(text-4xl)" className="yx-heading">
        {t('Kin.HalflingAndGoblin.HalflingAndGoblins', { ns: 'common' })}
      </h2>
      <div tw="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {halflingAndGoblinKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>
    </div>
  )
}
