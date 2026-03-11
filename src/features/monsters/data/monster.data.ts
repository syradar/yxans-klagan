import { defaultAttributes } from '../../../models/attributes.model'
import { Monster } from '../monster.model'

export const bookMonsters: Monster[] = [
  {
    id: 'giant',
    name: 'common:monster.giant',
    attributes: { ...defaultAttributes, strength: 24, agility: 2, wits: 2, empathy: 2 },
    movement: 2,
    armor: 3,
    skills: ['Pelea 4', 'Brío 5', 'Exploración 2'],
    pageReference: 120,
    attacks: [
      { type: 'giant_1', attack: 12, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_1.description' },
      { type: 'giant_2', attack: 6, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_2.description' },
      { type: 'giant_3', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_3.description' },
      { type: 'giant_4', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_4.description' },
      { type: 'giant_5', attack: 11, damage: { blunt: 1 }, range: 'common:range.short', description: 'monsters:attack.giant_5.description' },
      { type: 'giant_6', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_6.description' }
    ]
  },
  {
    id: 'abyss-worm',
    name: 'common:monster.abyss_worm',
    attributes: { ...defaultAttributes, strength: 18, agility: 2 },
    movement: '2 (Excavando bajo tierra)',
    armor: 8,
    skills: ['Pelea 3', 'Brío 5'],
    traits: ['Ataques subterráneos: Cava bajo tierra para emboscar a sus víctimas surgiendo de repente.'],
    pageReference: 72,
    attacks: [
      { type: 'abyss_worm_1', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.abyss_worm_1.description' },
      { type: 'abyss_worm_2', attack: 5, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.abyss_worm_2.description' },
      { type: 'abyss_worm_3', attack: 12, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.abyss_worm_3.description' },
      { type: 'abyss_worm_4', attack: 10, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.abyss_worm_4.description' },
      { type: 'abyss_worm_5', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.abyss_worm_5.description' },
      { type: 'abyss_worm_6', attack: 0, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.abyss_worm_6.description' }
    ]
  },
  {
    id: 'bloodling',
    name: 'common:monster.bloodling',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    movement: 2,
    armor: 'Ninguna (Mitad de daño de armas físicas no mágicas. Inmune a estocadas)',
    skills: ['Pelea 3', 'Sigilo 4'],
    traits: ['Anatomía de sangre: Inmune a ataques punzantes. Toma daño normal del fuego y armas mágicas.'],
    pageReference: 74,
    attacks: [
      { type: 'bloodling_1', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bloodling_1.description' },
      { type: 'bloodling_2', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bloodling_2.description' },
      { type: 'bloodling_3', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.bloodling_3.description' },
      { type: 'bloodling_4', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.bloodling_4.description' },
      { type: 'bloodling_5', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.bloodling_5.description' },
      { type: 'bloodling_6', attack: 12, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.bloodling_6.description' }
    ]
  },
  {
    id: 'dragon-small',
    name: 'common:monster.dragon_small',
    attributes: { strength: 32, agility: 2, wits: 4, empathy: 2 },
    movement: '2 en tierra, 3 volando',
    armor: 8,
    skills: ['Pelea 4', 'Exploración 4', 'Perspicacia 4'],
    traits: ['Escamas dracónicas: Inmune a todo daño por fuego.'],
    pageReference: 82,
    attacks: [
      { type: 'dragon_1', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dragon_1.description' },
      { type: 'dragon_2', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.dragon_2.description' },
      { type: 'dragon_3', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.dragon_3.description' },
      { type: 'dragon_4', attack: 12, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.dragon_4.description' },
      { type: 'dragon_5', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.dragon_5.description' },
      { type: 'dragon_6', attack: 12, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.dragon_6.description' }
    ]
  },
  {
    id: 'dragon-large',
    name: 'common:monster.dragon_large',
    attributes: { strength: 48, agility: 4, wits: 6, empathy: 3 },
    movement: '2 en tierra, 3 volando',
    armor: 12,
    skills: ['Pelea 5', 'Exploración 5', 'Perspicacia 5', 'Manipulación 3'],
    traits: ['Escamas dracónicas: Inmune a todo daño por fuego.'],
    pageReference: 82,
    attacks: [
      { type: 'dragon_1', attack: 16, damage: { slash: 3 }, range: 'common:range.near', description: 'monsters:attack.dragon_1.description' },
      { type: 'dragon_2', attack: 14, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.dragon_2.description' },
      { type: 'dragon_3', attack: 14, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.dragon_3.description' },
      { type: 'dragon_4', attack: 18, damage: { non_typical: 4 }, range: 'common:range.short', description: 'monsters:attack.dragon_4.description' },
      { type: 'dragon_5', attack: 14, damage: { blunt: 3 }, range: 'common:range.near', description: 'monsters:attack.dragon_5.description' },
      { type: 'dragon_6', attack: 18, damage: { non_typical: 4 }, range: 'common:range.short', description: 'monsters:attack.dragon_6.description' }
    ]
  },
  {
    id: 'drakewyrm',
    name: 'common:monster.drakewyrm',
    attributes: { strength: 25, agility: 3, wits: 5, empathy: 2 },
    movement: 2,
    armor: 10,
    skills: ['Pelea 4', 'Sigilo 3', 'Exploración 4'],
    traits: ['Inmune al ácido.'],
    pageReference: 84,
    attacks: [
      { type: 'drakewyrm_1', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.drakewyrm_1.description' },
      { type: 'drakewyrm_2', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.drakewyrm_2.description' },
      { type: 'drakewyrm_3', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.drakewyrm_3.description' },
      { type: 'drakewyrm_4', attack: 6, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.drakewyrm_4.description' },
      { type: 'drakewyrm_5', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.drakewyrm_5.description' },
      { type: 'drakewyrm_6', attack: 10, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.drakewyrm_6.description' }
    ]
  },
  {
    id: 'death-knight',
    name: 'common:monster.death_knight',
    attributes: { strength: 12, agility: 3, wits: 3, empathy: 2 },
    movement: 1,
    armor: '8 (Cota de placas. Inmune a estocadas. Mitad de daño de tajos y golpes)',
    skills: ['Pelea 4', 'Atletismo 2', 'Saber 3'],
    traits: ['No Muerto: Inmune a venenos y efectos mentales. El fuego le causa daño normal.'],
    pageReference: 86,
    attacks: [
      { type: 'death_knight_1', attack: 12, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.death_knight_1.description' },
      { type: 'death_knight_2', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.death_knight_2.description' },
      { type: 'death_knight_3', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.death_knight_3.description' },
      { type: 'death_knight_4', attack: 8, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.death_knight_4.description' },
      { type: 'death_knight_5', attack: 0, damage: { poison: { type: 'paralyzing', potency: 8 } }, range: 'common:range.near', description: 'monsters:attack.death_knight_5.description' },
      { type: 'death_knight_6', attack: 12, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.death_knight_6.description' }
    ]
  },
  {
    id: 'ent',
    name: 'common:monster.ent',
    attributes: { strength: 16, agility: 3, wits: 5, empathy: 3 },
    movement: 1,
    armor: 10,
    skills: ['Pelea 4', 'Exploración 3'],
    weaknesses: ['Corteza inflamable: El daño por fuego se duplica.'],
    pageReference: 88,
    attacks: [
      { type: 'ent_1', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.ent_1.description' },
      { type: 'ent_2', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.ent_2.description' },
      { type: 'ent_3', attack: 9, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.ent_3.description' },
      { type: 'ent_4', attack: 10, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.ent_4.description' },
      { type: 'ent_5', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.ent_5.description' },
      { type: 'ent_6', attack: 12, damage: { blunt: 2 }, range: 'common:range.short', description: 'monsters:attack.ent_6.description' }
    ]
  },
  {
    id: 'wyvern',
    name: 'common:monster.wyvern',
    attributes: { ...defaultAttributes, strength: 14, agility: 5 },
    movement: '1 en tierra, 3 volando',
    armor: 6,
    skills: ['Pelea 4', 'Exploración 4', 'Atletismo 3'],
    pageReference: 90,
    attacks: [
      { type: 'wyvern_1', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.wyvern_1.description' },
      { type: 'wyvern_2', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wyvern_2.description' },
      { type: 'wyvern_3', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.wyvern_3.description' },
      { type: 'wyvern_4', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.wyvern_4.description' },
      { type: 'wyvern_5', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wyvern_5.description' },
      { type: 'wyvern_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.wyvern_6.description' }
    ]
  },
  {
    id: 'ghost',
    name: 'common:monster.ghost',
    attributes: { strength: 8, agility: 3, wits: 3, empathy: 2 },
    movement: 2,
    armor: 'Ninguna (Inmaterial: Inmune a armas no mágicas. Toma mitad de daño de magia o armas mágicas, y doble de daño de fuego)',
    skills: ['Sigilo 5', 'Pelea 3'],
    traits: ['No Muerto: Inmune a venenos y dolor mental.'],
    pageReference: 92,
    attacks: [
      { type: 'ghost_1', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.ghost_1.description' },
      { type: 'ghost_2', attack: 9, damage: { fear: true }, range: 'common:range.arms_length', description: 'monsters:attack.ghost_2.description' },
      { type: 'ghost_3', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.ghost_3.description' },
      { type: 'ghost_4', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.ghost_4.description' },
      { type: 'ghost_5', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.ghost_5.description' },
      { type: 'ghost_6', attack: 12, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.ghost_6.description' }
    ]
  },
  {
    id: 'gryphon',
    name: 'common:monster.gryphon',
    attributes: { ...defaultAttributes, strength: 12, agility: 5 },
    movement: '1 en tierra, 3 volando',
    armor: 'Ninguna',
    skills: ['Pelea 3', 'Atletismo 4', 'Exploración 5'],
    pageReference: 94,
    attacks: [
      { type: 'gryphon_1', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_1.description' },
      { type: 'gryphon_2', attack: 6, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_2.description' },
      { type: 'gryphon_3', attack: 6, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_3.description' },
      { type: 'gryphon_4', attack: 9, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_4.description' },
      { type: 'gryphon_5', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.gryphon_5.description' },
      { type: 'gryphon_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gryphon_6.description' }
    ]
  },
  {
    id: 'gray-bear',
    name: 'common:monster.gray_bear',
    attributes: { ...defaultAttributes, strength: 14, agility: 2 },
    movement: 2,
    armor: 3,
    skills: ['Pelea 3', 'Brío 4', 'Exploración 3'],
    pageReference: 96,
    attacks: [
      { type: 'gray_bear_1', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.gray_bear_1.description' },
      { type: 'gray_bear_2', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.gray_bear_2.description' },
      { type: 'gray_bear_3', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.gray_bear_3.description' },
      { type: 'gray_bear_4', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.gray_bear_4.description' },
      { type: 'gray_bear_5', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.gray_bear_5.description' },
      { type: 'gray_bear_6', attack: 9, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.gray_bear_6.description' }
    ]
  },
  {
    id: 'harpies',
    name: 'common:monster.harpies',
    attributes: { strength: 8, agility: 3, wits: 2, empathy: 1 },
    movement: '1 en tierra, 3 volando',
    armor: 'Ninguna',
    skills: ['Pelea 3', 'Atletismo 4'],
    traits: ['Bandada: Un solo ataque cuerpo a cuerpo de una aventurera nunca puede infligirles más de 1 punto de daño, no importa el arma o los éxitos adicionales.'],
    pageReference: 98,
    attacks: [
      { type: 'harpies_1', attack: 6, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.harpies_1.description' },
      { type: 'harpies_2', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.harpies_2.description' },
      { type: 'harpies_3', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.harpies_3.description' },
      { type: 'harpies_4', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.harpies_4.description' },
      { type: 'harpies_5', attack: 6, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.harpies_5.description' },
      { type: 'harpies_6', attack: 6, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.harpies_6.description' }
    ]
  },
  {
    id: 'hydra',
    name: 'common:monster.hydra',
    attributes: { ...defaultAttributes, strength: 4, agility: 4 },
    movement: 1,
    armor: 4,
    skills: ['Pelea 3', 'Brío 3'],
    traits: ['Múltiples cabezas: Tiene de 3 a 7 cabezas. Su característica de Fuerza se multiplica por el número de cabezas.', 'Regeneración Reptiliana: Si recibe daño cortante, le crece otra cabeza y recupera Fuerza a menos que se use fuego.'],
    pageReference: 100,
    attacks: [
      { type: 'hydra_1', attack: 6, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.hydra_1.description' },
      { type: 'hydra_2', attack: 5, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.hydra_2.description' },
      { type: 'hydra_3', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.hydra_3.description' },
      { type: 'hydra_4', attack: 6, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.hydra_4.description' },
      { type: 'hydra_5', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.hydra_5.description' },
      { type: 'hydra_6', attack: 7, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.hydra_6.description' }
    ]
  },
  {
    id: 'insectoid',
    name: 'common:monster.insectoid',
    attributes: { ...defaultAttributes, strength: 5, agility: 3 },
    movement: 2,
    armor: 3,
    skills: ['Pelea 3', 'Sigilo 3', 'Exploración 2'],
    pageReference: 102,
    attacks: [
      { type: 'slash', attack: 9, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.slash.description' },
      { type: 'bite', attack: 9, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'poisonScratch', attack: 9, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.poisonScratch.description' },
      { type: 'webshot', attack: 9, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.webshot.description' },
      { type: 'poisonSpit', attack: 9, damage: { poison: { type: 'lethal', potency: 5 } }, range: 'common:range.near', description: 'monsters:attack.poisonSpit.description' },
      { type: 'rush', attack: 9, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.rush.description' }
    ]
  },
  {
    id: 'giant-squid',
    name: 'common:monster.giant_squid',
    attributes: { ...defaultAttributes, strength: 14, agility: 4 },
    movement: '3 nadando',
    armor: 'Ninguna',
    skills: ['Pelea 4', 'Sigilo 4', 'Brío 5'],
    pageReference: 106,
    attacks: [
      { type: 'giant_squid_1', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_squid_1.description' },
      { type: 'giant_squid_2', attack: 6, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_squid_2.description' },
      { type: 'giant_squid_3', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_squid_3.description' },
      { type: 'giant_squid_4', attack: 9, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_squid_4.description' },
      { type: 'giant_squid_5', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_squid_5.description' },
      { type: 'giant_squid_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_squid_6.description' }
    ]
  },
  {
    id: 'manticore',
    name: 'common:monster.manticore',
    attributes: { ...defaultAttributes, strength: 15, agility: 4 },
    movement: '2 en tierra, 3 volando',
    armor: 4,
    skills: ['Pelea 4', 'Atletismo 3', 'Sigilo 3'],
    pageReference: 108,
    attacks: [
      { type: 'manticore_1', attack: 9, damage: { stab: 2 }, range: 'common:range.short', description: 'monsters:attack.manticore_1.description' },
      { type: 'manticore_2', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.manticore_2.description' },
      { type: 'manticore_3', attack: 10, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.manticore_3.description' },
      { type: 'manticore_4', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.manticore_4.description' },
      { type: 'manticore_5', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.manticore_5.description' },
      { type: 'manticore_6', attack: 7, damage: { stab: 2 }, range: 'common:range.short', description: 'monsters:attack.manticore_6.description' }
    ]
  },
  {
    id: 'minotaur',
    name: 'common:monster.minotaur',
    attributes: { strength: 10, agility: 4, wits: 2, empathy: 2 },
    movement: 2,
    armor: 3,
    skills: ['Pelea 3', 'Brío 4', 'Exploración 3'],
    pageReference: 110,
    attacks: [
      { type: 'minotaur_1', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.minotaur_1.description' },
      { type: 'minotaur_2', attack: 9, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.minotaur_2.description' },
      { type: 'minotaur_3', attack: 10, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.minotaur_3.description' },
      { type: 'minotaur_4', attack: 10, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.minotaur_4.description' },
      { type: 'minotaur_5', attack: 8, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.minotaur_5.description' },
      { type: 'minotaur_6', attack: 12, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.minotaur_6.description' }
    ]
  },
  {
    id: 'nightwarg',
    name: 'common:monster.night_warg',
    attributes: { ...defaultAttributes, strength: 8, agility: 4 },
    movement: 3,
    armor: 2,
    skills: ['Pelea 4', 'Sigilo 5', 'Exploración 4'],
    weaknesses: ['Miedo al fuego: Si recibe daño de un ataque ígneo, debe superar inmediatamente una tirada para no huir despavorido.'],
    pageReference: 112,
    attacks: [
      { type: 'nightwarg_1', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.nightwarg_1.description' },
      { type: 'nightwarg_2', attack: 7, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.nightwarg_2.description' },
      { type: 'nightwarg_3', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.nightwarg_3.description' },
      { type: 'nightwarg_4', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.nightwarg_4.description' },
      { type: 'nightwarg_5', attack: 7, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.nightwarg_5.description' },
      { type: 'nightwarg_6', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.nightwarg_6.description' }
    ]
  },
  {
    id: 'restless-dead',
    name: 'common:monster.restless_dead',
    attributes: { ...defaultAttributes, strength: 3, agility: 2 },
    movement: 1,
    armor: '1 o 2 (Restos de cuero o malla)',
    skills: ['Pelea 2'],
    traits: ['No Muerto: Inmune a venenos, enfermedades y al miedo.'],
    pageReference: 114,
    attacks: [
      { type: 'slash', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.slash.description' },
      { type: 'bash', attack: 7, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'bite', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bite.description' },
      { type: 'rush', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'clawFlurry', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.clawFlurry.description' },
      { type: 'deadlyGaze', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.deadlyGaze.description' }
    ]
  },
  {
    id: 'skeleton',
    name: 'common:monster.skeleton',
    attributes: { ...defaultAttributes, strength: 3, agility: 2 },
    movement: 1,
    armor: 'Ninguna (Inmune a estocadas. Mitad de daño de cortes. Vulnerable a contusiones)',
    skills: ['Pelea 2'],
    traits: ['No Muerto: Inmune a venenos y efectos mentales.'],
    pageReference: 114,
    attacks: [
      { type: 'slash', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.slash.description' },
      { type: 'bash', attack: 7, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.bash.description' },
      { type: 'stab', attack: 7, damage: { stab: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.stab.description' },
      { type: 'rush', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.rush.description' },
      { type: 'sweep', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.sweep.description' },
      { type: 'distraction', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.distraction.description' }
    ]
  },
  {
    id: 'ghoul',
    name: 'common:monster.ghoul',
    attributes: { ...defaultAttributes, strength: 4, agility: 2 },
    movement: 2,
    armor: 'Ninguna',
    skills: ['Pelea 2', 'Sigilo 3'],
    traits: ['No Muerto: Inmune a veneno. Contagia la podredumbre con sus uñas y mordiscos.'],
    pageReference: 114,
    attacks: [
      { type: 'clawFlurry', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.clawFlurry.description' },
      { type: 'infectedScratch', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.infectedScratch.description' },
      { type: 'diseasedBite', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.diseasedBite.description' },
      { type: 'pounce', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.pounce.description' },
      { type: 'lockedJaws', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.lockedJaws.description' },
      { type: 'distraction', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.distraction.description' }
    ]
  },
  {
    id: 'sea-serpent',
    name: 'common:monster.sea_serpent',
    attributes: { ...defaultAttributes, strength: 18, agility: 3 },
    movement: '3 nadando',
    armor: 6,
    skills: ['Pelea 4', 'Sigilo 3', 'Brío 5'],
    pageReference: 116,
    attacks: [
      { type: 'sea_serpent_1', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.sea_serpent_1.description' },
      { type: 'sea_serpent_2', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.sea_serpent_2.description' },
      { type: 'sea_serpent_3', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.sea_serpent_3.description' },
      { type: 'sea_serpent_4', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.sea_serpent_4.description' },
      { type: 'sea_serpent_5', attack: 9, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.sea_serpent_5.description' },
      { type: 'sea_serpent_6', attack: 11, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.sea_serpent_6.description' }
    ]
  },
  {
    id: 'strangling-vine',
    name: 'common:monster.strangling_vine',
    attributes: { ...defaultAttributes, strength: 8, agility: 3 },
    movement: 0,
    armor: 'Ninguna',
    skills: ['Pelea 3', 'Brío 4'],
    traits: ['Planta: Inmune a venenos y ataques mentales.'],
    weaknesses: ['Vulnerable al fuego.'],
    pageReference: 118,
    attacks: [
      { type: 'vine_1', attack: 0, damage: { poison: { type: 'paralyzing', potency: 8 } }, range: 'common:range.near', description: 'monsters:attack.vine_1.description' },
      { type: 'vine_2', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.vine_2.description' },
      { type: 'vine_3', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.vine_3.description' },
      { type: 'vine_4', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.vine_4.description' },
      { type: 'vine_5', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.vine_5.description' },
      { type: 'vine_6', attack: 0, damage: { poison: { type: 'paralyzing', potency: 8 } }, range: 'common:range.near', description: 'monsters:attack.vine_6.description' }
    ]
  },
  {
    id: 'troll',
    name: 'common:monster.troll',
    attributes: { ...defaultAttributes, strength: 8, agility: 3 },
    movement: 2,
    armor: 4,
    skills: ['Pelea 3', 'Brío 4'],
    weaknesses: ['Sensible a la luz solar: Si es expuesto a la luz del sol directamente, el Trol se convertirá lentamente en piedra sufriendo 1D6 de daño cada asalto.'],
    pageReference: 120,
    attacks: [
      { type: 'troll_1', attack: 9, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.troll_1.description' },
      { type: 'troll_2', attack: 8, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.troll_2.description' },
      { type: 'troll_3', attack: 12, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.troll_3.description' },
      { type: 'troll_4', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.troll_4.description' },
      { type: 'troll_5', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.troll_5.description' },
      { type: 'troll_6', attack: 7, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.troll_6.description' }
    ]
  }
]
