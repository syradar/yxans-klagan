import { TranslationKey } from '../store/translations/translation.model'

export const talents = [
  'bowyer',
  'builder',
  'chef',
  'coldBlooded',
  'executioner2',
  'fastFootwork',
  'horseMaster',
  'lockpicker',
  'masterOfTheHunt',
  'pathfinder',
  'pathOfBlood2',
  'pathOfBlood2OrPathOfDeath2',
  'pathOfDeath2',
  'pathOfForest2',
  'pathOfHealing2',
  'pathOfHealing2OrShiftingShapes2OrPathOfSight2',
  'pathOfKiller2',
  'pathOfSight2',
  'pathOfTheArrow2',
  'pathOfTheBlade2',
  'pathOfTheBlade2OrPathOfTheEnemy2',
  'pathOfTheEnemy2',
  'pathOfTheSong',
  'poisoner',
  'shiftingShapes2',
  'shiftingShapes3',
  'smith',
  'tailor',
  'tailorOrTanner',
  'tanner',
  'threatening',
] as const
export type Talent = (typeof talents)[number]

export const isTalent = (talent: string): talent is Talent =>
  talents.includes(talent as Talent)

export const talentLabelDict: Readonly<
  Record<Talent, TranslationKey<'common'>>
> = Object.freeze({
  bowyer: 'common:talents.bowyer',
  builder: 'common:talents.builder',
  chef: 'common:talents.chef',
  coldBlooded: 'common:talents.coldBlooded',
  executioner2: 'common:talents.executioner2',
  fastFootwork: 'common:talents.fastFootwork',
  horseMaster: 'common:talents.horseMaster',
  lockpicker: 'common:talents.lockpicker',
  masterOfTheHunt: 'common:talents.masterOfTheHunt',
  pathfinder: 'common:talents.pathfinder',
  pathOfBlood2: 'common:talents.pathOfBlood2',
  pathOfBlood2OrPathOfDeath2: 'common:talents.pathOfBlood2OrPathOfDeath2',
  pathOfDeath2: 'common:talents.pathOfDeath2',
  pathOfForest2: 'common:talents.pathOfForest2',
  pathOfHealing2: 'common:talents.pathOfHealing2',
  pathOfHealing2OrShiftingShapes2OrPathOfSight2:
    'common:talents.pathOfHealing2OrShiftingShapes2OrPathOfSight2',
  pathOfKiller2: 'common:talents.pathOfKiller2',
  pathOfSight2: 'common:talents.pathOfSight2',
  pathOfTheArrow2: 'common:talents.pathOfTheArrow2',
  pathOfTheBlade2: 'common:talents.pathOfTheBlade2',
  pathOfTheBlade2OrPathOfTheEnemy2:
    'common:talents.pathOfTheBlade2OrPathOfTheEnemy2',
  pathOfTheEnemy2: 'common:talents.pathOfTheEnemy2',
  pathOfTheSong: 'common:talents.pathOfTheSong',
  poisoner: 'common:talents.poisoner',
  shiftingShapes2: 'common:talents.shiftingShapes2',
  shiftingShapes3: 'common:talents.shiftingShapes3',
  smith: 'common:talents.smith',
  tailor: 'common:talents.tailor',
  tailorOrTanner: 'common:talents.tailorOrTanner',
  tanner: 'common:talents.tanner',
  threatening: 'common:talents.threatening',
})
