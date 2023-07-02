import { TranslationKey } from '../store/translations/translation.model'

export type Tool =
  | 'axe'
  | 'brewery'
  | 'cauldron'
  | 'fire'
  | 'forge'
  | 'hammer'
  | 'inkAndQuill'
  | 'knife'
  | 'knifeOrAxe'
  | 'needleAndThread'
  | 'saw'

export const toolLabelDict: Readonly<Record<Tool, TranslationKey<'common'>>> =
  Object.freeze({
    axe: 'common:tool.axe',
    brewery: 'common:tool.brewery',
    cauldron: 'common:tool.cauldron',
    fire: 'common:tool.fire',
    forge: 'common:tool.forge',
    hammer: 'common:tool.hammer',
    inkAndQuill: 'common:tool.ink_and_quill',
    knife: 'common:tool.knife',
    knifeOrAxe: 'common:tool.knife_or_axe',
    needleAndThread: 'common:tool.needle_and_thread',
    saw: 'common:tool.saw',
  })
