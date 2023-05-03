import { PageHeader } from '../../components/page-header'
import { Pancake } from '../../components/Stack'
import { useAppSelector } from '../../store/store.hooks'
import { selectTranslateFunction } from '../../store/translations/translation.slice'
import {
  believerTypicalKins,
  dwarfTypicalKins,
  elfTypicalKins,
  halflingAndGoblinTypicalKins,
  humanTypicalKins,
  ogreTypicalKins,
  orcTypicalKins,
  saurianTypicalKins,
  whinerTypicalKins,
  wolfkinTypicalKins,
} from './data/typical-kin.data'
import { createTypicalKinViewModel } from './typical-kin'
import { TypicalKinDisplay } from './TypicalKinDisplay'

export const TypicalKinPage = () => {
  const t = useAppSelector(selectTranslateFunction(['typical', 'common']))

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

  const believerKinViewModels = Object.values(believerTypicalKins).map(
    createTypicalKinViewModel,
  )

  return (
    <div className="flex w-full flex-col gap-y-8 pb-16">
      <PageHeader>{t('typical:Title')}</PageHeader>
      <h2 className="yx-heading text-center text-2xl lg:text-4xl">
        {t('common:Kin.Human.Humans')}
      </h2>
      <div className="grid gap-4 md:grid-cols-2  2xl:grid-cols-3">
        {humanKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>
      <h2 className="yx-heading text-center text-2xl lg:text-4xl">
        {t('common:Kin.Elf.Elves')}
      </h2>
      <div className="grid gap-4 md:grid-cols-2  2xl:grid-cols-3">
        {elfKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>
      <h2 className="yx-heading text-center text-2xl lg:text-4xl">
        {t('common:Kin.Dwarf.Dwarves')}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {dwarfKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>
      <h2 className="yx-heading text-center text-2xl lg:text-4xl">
        {t('common:Kin.Orc.Orcs')}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {orcKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        <Pancake>
          <h2 className="yx-heading text-center text-2xl lg:text-4xl">
            {t('common:Kin.Ogre.Ogres')}
          </h2>
          {ogreKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </Pancake>
        <Pancake>
          <h2 className="yx-heading text-center text-2xl lg:text-4xl">
            {t('common:Kin.Wolfkin.Wolfkins')}
          </h2>

          {wolfkinKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </Pancake>
      </div>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        <Pancake>
          <h2 className="yx-heading text-center text-2xl lg:text-4xl">
            {t('common:Kin.Saurian.Saurians')}
          </h2>
          {saurianKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </Pancake>
        <Pancake>
          <h2 className="yx-heading text-center text-2xl lg:text-4xl">
            {t('common:Kin.Whiner.Whiners')}
          </h2>
          {whinerKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </Pancake>
      </div>
      <h2 className="yx-heading text-center text-2xl lg:text-4xl">
        {t('common:Kin.HalflingAndGoblin.HalflingAndGoblins')}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {halflingAndGoblinKinViewModels.map((tkvm) => (
          <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
        ))}
      </div>
      <Pancake>
        <h2 className="yx-heading text-center text-2xl lg:text-4xl">
          {t('common:Kin.Believers.Believers')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {believerKinViewModels.map((tkvm) => (
            <TypicalKinDisplay key={tkvm.kin} tkvm={tkvm}></TypicalKinDisplay>
          ))}
        </div>
      </Pancake>
    </div>
  )
}

export default TypicalKinPage
