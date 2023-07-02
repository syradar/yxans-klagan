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
  coldBlooded: 'common:talents.cold_blooded',
  executioner2: 'common:talents.executioner2',
  fastFootwork: 'common:talents.fast_footwork',
  horseMaster: 'common:talents.horse_master',
  lockpicker: 'common:talents.lockpicker',
  masterOfTheHunt: 'common:talents.master_of_the_hunt',
  pathfinder: 'common:talents.pathfinder',
  pathOfBlood2: 'common:talents.path_of_blood2',
  pathOfBlood2OrPathOfDeath2: 'common:talents.path_of_blood2or_path_of_death2',
  pathOfDeath2: 'common:talents.path_of_death2',
  pathOfForest2: 'common:talents.path_of_forest2',
  pathOfHealing2: 'common:talents.path_of_healing2',
  pathOfHealing2OrShiftingShapes2OrPathOfSight2:
    'common:talents.path_of_healing2or_shifting_shapes2or_path_of_sight2',
  pathOfKiller2: 'common:talents.path_of_killer2',
  pathOfSight2: 'common:talents.path_of_sight2',
  pathOfTheArrow2: 'common:talents.path_of_the_arrow2',
  pathOfTheBlade2: 'common:talents.path_of_the_blade2',
  pathOfTheBlade2OrPathOfTheEnemy2:
    'common:talents.path_of_the_blade2or_path_of_the_enemy2',
  pathOfTheEnemy2: 'common:talents.path_of_the_enemy2',
  pathOfTheSong: 'common:talents.path_of_the_song',
  poisoner: 'common:talents.poisoner',
  shiftingShapes2: 'common:talents.shifting_shapes2',
  shiftingShapes3: 'common:talents.shifting_shapes3',
  smith: 'common:talents.smith',
  tailor: 'common:talents.tailor',
  tailorOrTanner: 'common:talents.tailor_or_tanner',
  tanner: 'common:talents.tanner',
  threatening: 'common:talents.threatening',
})
