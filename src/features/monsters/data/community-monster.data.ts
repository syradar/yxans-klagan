import { defaultAttributes } from '../../../models/attributes.model'
import { Monster } from '../monster.model'

export const communityMonsters: Monster[] = [
  {
    id: 'amphibian',
    name: 'common:monster.amphibian',
    attributes: { ...defaultAttributes, strength: 5, agility: 2, wits: 3, empathy: 3 },
    movement: '2 en agua, 1 en tierra',
    armor: 2,
    skills: ['Resistencia 2', 'Pelea 3', 'Exploración 3', 'Supervivencia 3'],
    pageReference: 7,
    attacks: [
      { type: 'amphibian_1', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.amphibian_1.description' },
      { type: 'amphibian_2', attack: 6, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.amphibian_2.description' },
      { type: 'amphibian_3', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.amphibian_3.description' },
      { type: 'amphibian_4', attack: 6, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.amphibian_4.description' },
      { type: 'amphibian_5', attack: 6, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.amphibian_5.description' },
      { type: 'amphibian_6', attack: 7, damage: { poison: { type: 'lethal', potency: 3 } }, range: 'common:range.near', description: 'monsters:attack.amphibian_6.description' }
    ]
  },
  {
    id: 'amoeba',
    name: 'common:monster.amoeba',
    attributes: { ...defaultAttributes, strength: 18, agility: 3, wits: 1, empathy: 1 },
    movement: 2,
    armor: 'Ninguna (Mitad de daño de armas físicas, inmune a estocadas. Doble daño por fuego)',
    pageReference: 11,
    attacks: [
      { type: 'amoeba_1', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.amoeba_1.description' },
      { type: 'amoeba_2', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.amoeba_2.description' },
      { type: 'amoeba_3', attack: 7, damage: { poison: { type: 'lethal', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.amoeba_3.description' },
      { type: 'amoeba_4', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.amoeba_4.description' },
      { type: 'amoeba_5', attack: 9, damage: { stab: 1 }, range: 'common:range.near', description: 'monsters:attack.amoeba_5.description' },
      { type: 'amoeba_6', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.amoeba_6.description' }
    ]
  },
  {
    id: 'basilisk',
    name: 'common:monster.basilisk',
    attributes: { ...defaultAttributes, strength: 24, agility: 6, wits: 2, empathy: 1 },
    movement: 2,
    armor: 8,
    weaknesses: ['Fuerza Vital Vinculada: Su vida está ligada al huevo de gallo del que eclosionó. Si se destruye el huevo (que suele estar en su guarida), pierde sus poderes mágicos y se encoge a una víbora inofensiva.'],
    pageReference: 15,
    attacks: [
      { type: 'basilisk_1', attack: 7, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.basilisk_1.description' },
      { type: 'basilisk_2', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.basilisk_2.description' },
      { type: 'basilisk_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.basilisk_3.description' },
      { type: 'basilisk_4', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.basilisk_4.description' },
      { type: 'basilisk_5', attack: 0, damage: { poison: { type: 'lethal', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.basilisk_5.description' },
      { type: 'basilisk_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.basilisk_6.description' }
    ]
  },
  {
    id: 'bog_man',
    name: 'common:monster.bog_man',
    attributes: { ...defaultAttributes, strength: 12, agility: 3, wits: 1, empathy: 1 },
    movement: 1,
    armor: 'Ninguna (Inmune a armas normales. Daño normal por magia y fuego)',
    traits: ['Atraído por objetos de valor: Ataca siempre a la aventurera que lleve más tesoros u objetos mágicos. Puede ser distraído si se le arroja un objeto brillante al pantano.'],
    pageReference: 19,
    attacks: [
      { type: 'bog_man_1', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.bog_man_1.description' },
      { type: 'bog_man_2', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.bog_man_2.description' },
      { type: 'bog_man_3', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.bog_man_3.description' },
      { type: 'bog_man_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.bog_man_4.description' },
      { type: 'bog_man_5', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.bog_man_5.description' },
      { type: 'bog_man_6', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.bog_man_6.description' }
    ]
  },
  {
    id: 'dread_raptor',
    name: 'common:monster.dread_raptor',
    attributes: { ...defaultAttributes, strength: 14, agility: 5, wits: 1, empathy: 0 },
    movement: 3,
    armor: 3,
    weaknesses: ['Fácil de Engañar: Es muy poco inteligente. Cambiar de dirección repentinamente o esconderse tras un arbusto puede confundirlo (requiere tirada de Supervivencia).'],
    pageReference: 23,
    attacks: [
      { type: 'dread_raptor_1', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_1.description' },
      { type: 'dread_raptor_2', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_2.description' },
      { type: 'dread_raptor_3', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_3.description' },
      { type: 'dread_raptor_4', attack: 7, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_4.description' },
      { type: 'dread_raptor_5', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_5.description' },
      { type: 'dread_raptor_6', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.dread_raptor_6.description' }
    ]
  },
  {
    id: 'gatekeeper',
    name: 'common:monster.gatekeeper',
    attributes: { ...defaultAttributes, strength: 24, agility: 4, wits: 4, empathy: 0 },
    movement: 2,
    armor: 5,
    traits: ['Desafío telepático: Plantea un acertijo mental antes de atacar. La aventurera con mayor Intelecto debe ganar una tirada enfrentada para poder pasar ilesos.', 'Ligado al portal: Se desvanecerá si persigue a alguien más allá de distancia Corta de su portal.'],
    pageReference: 27,
    attacks: [
      { type: 'gatekeeper_1', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_1.description' },
      { type: 'gatekeeper_2', attack: 9, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_2.description' },
      { type: 'gatekeeper_3', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_3.description' },
      { type: 'gatekeeper_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_4.description' },
      { type: 'gatekeeper_5', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_5.description' },
      { type: 'gatekeeper_6', attack: 10, damage: { non_typical: 2 }, range: 'common:range.near', description: 'monsters:attack.gatekeeper_6.description' }
    ]
  },
  {
    id: 'giant_specter',
    name: 'common:monster.giant_specter',
    attributes: { ...defaultAttributes, strength: 32, agility: 2, wits: 2, empathy: 2 },
    movement: 1,
    armor: 'Ninguna (Toma la mitad de daño de armas físicas no mágicas. Fuego y magia le hacen daño normal)',
    traits: ['Controlado por la Estrella Errante Roja: Su agresividad depende de la estrella. En la sombra (1-2 en 1D6): Defensivo, no usa ataques 5-6. Visible (3-4): Agresivo. Brillante (5-6): Ataca con +1 dado base.'],
    pageReference: 31,
    attacks: [
      { type: 'giant_specter_1', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_specter_1.description' },
      { type: 'giant_specter_2', attack: 9, damage: { fear: true }, range: 'common:range.arms_length', description: 'monsters:attack.giant_specter_2.description' },
      { type: 'giant_specter_3', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_specter_3.description' },
      { type: 'giant_specter_4', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_specter_4.description' },
      { type: 'giant_specter_5', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_specter_5.description' },
      { type: 'giant_specter_6', attack: 12, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_specter_6.description' }
    ]
  },
  {
    id: 'giant_spider_hatchling',
    name: 'common:monster.giant_spider_hatchling',
    attributes: { ...defaultAttributes, strength: 15, agility: 3, wits: 2, empathy: 0 },
    movement: 2,
    armor: 1,
    traits: ['Manada: Actúan como un solo monstruo. La Fortaleza varía según el número. Ningún ataque individual puede hacerles más de 1 punto de daño.'],
    pageReference: 35,
    attacks: [
      { type: 'giant_spider_hatchling_1', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_1.description' },
      { type: 'giant_spider_hatchling_2', attack: 6, damage: { stab: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_2.description' },
      { type: 'giant_spider_hatchling_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_3.description' },
      { type: 'giant_spider_hatchling_4', attack: 6, damage: { poison: { type: 'sleeping', potency: 6 } }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_4.description' },
      { type: 'giant_spider_hatchling_5', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_hatchling_5.description' },
      { type: 'giant_spider_hatchling_6', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_hatchling_6.description' }
    ]
  },
  {
    id: 'giant_spider_male',
    name: 'common:monster.giant_spider_male',
    attributes: { ...defaultAttributes, strength: 16, agility: 6, wits: 3, empathy: 0 },
    movement: 3,
    armor: 3,
    pageReference: 35,
    attacks: [
      { type: 'giant_spider_male_1', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_male_1.description' },
      { type: 'giant_spider_male_2', attack: 7, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_male_2.description' },
      { type: 'giant_spider_male_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_male_3.description' },
      { type: 'giant_spider_male_4', attack: 7, damage: { poison: { type: 'paralyzing', potency: 8 } }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_male_4.description' },
      { type: 'giant_spider_male_5', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_male_5.description' },
      { type: 'giant_spider_male_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.short', description: 'monsters:attack.giant_spider_male_6.description' }
    ]
  },
  {
    id: 'giant_spider_female',
    name: 'common:monster.giant_spider_female',
    attributes: { ...defaultAttributes, strength: 28, agility: 2, wits: 4, empathy: 0 },
    movement: 2,
    armor: 5,
    traits: ['Telepatía: Lee mentes a Larga distancia. A Cerca puede usar distracciones telepáticas; los aventureros deben superar Intelecto enfrentado o sufrir -1 a todo en el combate.'],
    pageReference: 35,
    attacks: [
      { type: 'giant_spider_female_1', attack: 9, damage: { slash: 3 }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_female_1.description' },
      { type: 'giant_spider_female_2', attack: 8, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_female_2.description' },
      { type: 'giant_spider_female_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_female_3.description' },
      { type: 'giant_spider_female_4', attack: 9, damage: { poison: { type: 'lethal', potency: 10 } }, range: 'common:range.arms_length', description: 'monsters:attack.giant_spider_female_4.description' },
      { type: 'giant_spider_female_5', attack: 0, damage: { non_typical: 2 }, range: 'common:range.near', description: 'monsters:attack.giant_spider_female_5.description' },
      { type: 'giant_spider_female_6', attack: 9, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.giant_spider_female_6.description' }
    ]
  },
  {
    id: 'greater_golem',
    name: 'common:monster.greater_golem',
    attributes: { ...defaultAttributes, strength: 20, agility: 2, wits: 2, empathy: 0 },
    movement: 1,
    armor: '8 (Mitad de daño de estocadas y cortes)',
    traits: ['Regeneración Mágica: Recupera toda la Fuerza en 15 minutos. Solo puede morir destruyendo la runa de su frente (requiere un ataque de al menos 3 de daño con penalizador -2).'],
    pageReference: 43,
    attacks: [
      { type: 'greater_golem_1', attack: 9, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.greater_golem_1.description' },
      { type: 'greater_golem_2', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.greater_golem_2.description' },
      { type: 'greater_golem_3', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.greater_golem_3.description' },
      { type: 'greater_golem_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.greater_golem_4.description' },
      { type: 'greater_golem_5', attack: 9, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.greater_golem_5.description' },
      { type: 'greater_golem_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.greater_golem_6.description' }
    ]
  },
  {
    id: 'imp',
    name: 'common:monster.imp',
    attributes: { ...defaultAttributes, strength: 6, agility: 4, wits: 6, empathy: 0 },
    movement: 2,
    armor: '3 (Vulnerable a magia, fuego y armas sin hierro. Daño doble con armas sagradas/hierro bendito)',
    traits: ['Atraído por la magia: Aparece inmediatamente si un hechicero pifia con 3 o más de daño mágico.'],
    pageReference: 47,
    attacks: [
      { type: 'imp_1', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.imp_1.description' },
      { type: 'imp_2', attack: 8, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.imp_2.description' },
      { type: 'imp_3', attack: 8, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.imp_3.description' },
      { type: 'imp_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.imp_4.description' },
      { type: 'imp_5', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.imp_5.description' },
      { type: 'imp_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.imp_6.description' }
    ]
  },
  {
    id: 'iron_dragon',
    name: 'common:monster.iron_dragon',
    attributes: { ...defaultAttributes, strength: 60, agility: 3, wits: 2, empathy: 1 },
    movement: 3,
    armor: 10,
    skills: ['Exploración 2', 'Perspicacia 1', 'Manipulación 1'],
    weaknesses: ['Vías respiratorias sensibles: Los ataques directos a sus branquias sufren -2, pero si aciertan ignoran toda su armadura.'],
    pageReference: 51,
    attacks: [
      { type: 'iron_dragon_1', attack: 10, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_1.description' },
      { type: 'iron_dragon_2', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.iron_dragon_2.description' },
      { type: 'iron_dragon_3', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_3.description' },
      { type: 'iron_dragon_4', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_4.description' },
      { type: 'iron_dragon_5', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_5.description' },
      { type: 'iron_dragon_6', attack: 12, damage: { non_typical: 2 }, range: 'common:range.near', description: 'monsters:attack.iron_dragon_6.description' }
    ]
  },
  {
    id: 'mara',
    name: 'common:monster.mara',
    attributes: { ...defaultAttributes, strength: 12, agility: 3, wits: 2, empathy: 0 },
    movement: 1,
    armor: 'Ninguna (Inmaterial. Solo sufre daño mágico o por armas mágicas. Mitad de daño de fuego)',
    traits: ['Ataque onírico: Ataca en sueños a una sola víctima. Los aliados pueden atacar a su perturbadora sombra en el mundo físico para despertarla.'],
    pageReference: 55,
    attacks: [
      { type: 'mara_1', attack: 8, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.mara_1.description' },
      { type: 'mara_2', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.mara_2.description' },
      { type: 'mara_3', attack: 0, damage: { poison: { type: 'sleeping', potency: 7 } }, range: 'common:range.arms_length', description: 'monsters:attack.mara_3.description' },
      { type: 'mara_4', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.mara_4.description' },
      { type: 'mara_5', attack: 10, damage: { fear: true }, range: 'common:range.arms_length', description: 'monsters:attack.mara_5.description' },
      { type: 'mara_6', attack: 10, damage: { stab: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.mara_6.description' }
    ]
  },
  {
    id: 'mire_drake',
    name: 'common:monster.mire_drake',
    attributes: { ...defaultAttributes, strength: 32, agility: 3, wits: 5, empathy: 2 },
    movement: '2 volando o nadando, 1 en tierra',
    armor: 8,
    traits: ['Encanto Peligroso: Todo humano con Intelecto 3 o menor a distancia Cerca debe ganar una tirada enfrentada de Perspicacia cada asalto o será incapaz de atacar a la bestia.'],
    pageReference: 59,
    attacks: [
      { type: 'mire_drake_1', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.mire_drake_1.description' },
      { type: 'mire_drake_2', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.mire_drake_2.description' },
      { type: 'mire_drake_3', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.mire_drake_3.description' },
      { type: 'mire_drake_4', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.mire_drake_4.description' },
      { type: 'mire_drake_5', attack: 7, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.mire_drake_5.description' },
      { type: 'mire_drake_6', attack: 0, damage: { poison: { type: 'lethal', potency: 10 } }, range: 'common:range.near', description: 'monsters:attack.mire_drake_6.description' }
    ]
  },
  {
    id: 'mummy',
    name: 'common:monster.mummy',
    attributes: { ...defaultAttributes, strength: 24, agility: 3, wits: 2, empathy: 0 },
    movement: 1,
    armor: 'Solo de objetos (Mitad de daño de ataques físicos, y nulo si son estocadas. Doble de daño de fuego)',
    skills: ['Brío 6'],
    traits: ['Atraída por las entrañas: Ataca y persigue al objetivo con más Fortaleza. Si lo mata arranca su corazón.', 'Atada a la tumba: Si sale de su cripta recibe 2 puntos de daño por asalto.'],
    pageReference: 63,
    attacks: [
      { type: 'mummy_1', attack: 12, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.mummy_1.description' },
      { type: 'mummy_2', attack: 9, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.mummy_2.description' },
      { type: 'mummy_3', attack: 0, damage: { poison: { type: 'paralyzing', potency: 10 } }, range: 'common:range.near', description: 'monsters:attack.mummy_3.description' },
      { type: 'mummy_4', attack: 0, damage: { poison: { type: 'sleeping', potency: 8 } }, range: 'common:range.near', description: 'monsters:attack.mummy_4.description' },
      { type: 'mummy_5', attack: 10, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.mummy_5.description' },
      { type: 'mummy_6', attack: 10, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.mummy_6.description' }
    ]
  },
  {
    id: 'nature_spirit',
    name: 'common:monster.nature_spirit',
    attributes: { ...defaultAttributes, strength: 18, agility: 3, wits: 2, empathy: 1 },
    movement: 1,
    armor: 'Ninguna (Mitad de daño de fuego y armas no mágicas)',
    traits: ['Deseo de Sacrificios: Un buhonero ágil puede convencerle de detener su ataque mediante promesas falsas de tributos u ofrendas futuras (Manipulación contra Intelecto).'],
    pageReference: 67,
    attacks: [
      { type: 'nature_spirit_1', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_1.description' },
      { type: 'nature_spirit_2', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_2.description' },
      { type: 'nature_spirit_3', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_3.description' },
      { type: 'nature_spirit_4', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_4.description' },
      { type: 'nature_spirit_5', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.nature_spirit_5.description' },
      { type: 'nature_spirit_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.nature_spirit_6.description' }
    ]
  },
  {
    id: 'possessor',
    name: 'common:monster.possessor',
    attributes: { ...defaultAttributes, strength: 10, agility: 4, wits: 3, empathy: 0 },
    movement: 1,
    armor: '-',
    traits: ['Forma de niebla: En su estado de niebla es completamente invulnerable a armas y magia. Debe poseer un anfitrión físico para hacerle daño (si el anfitrión muere, el demonio muere).'],
    weaknesses: ['Sensible a la luz: Las antorchas o linternas sirven de armas cuerpo a cuerpo contra él (Bono de arma +1 y Daño 1).'],
    pageReference: 71,
    attacks: [
      { type: 'possessor_1', attack: 10, damage: { poison: { type: 'hallucinogenic', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.possessor_1.description' },
      { type: 'possessor_2', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.possessor_2.description' },
      { type: 'possessor_3', attack: 0, damage: { disease: 9 }, range: 'common:range.short', description: 'monsters:attack.possessor_3.description' },
      { type: 'possessor_4', attack: 10, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.possessor_4.description' },
      { type: 'possessor_5', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.possessor_5.description' },
      { type: 'possessor_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.possessor_6.description' }
    ]
  },
  {
    id: 'rat_king',
    name: 'common:monster.rat_king',
    attributes: { ...defaultAttributes, strength: 24, agility: 3, wits: 8, empathy: 2 },
    movement: 1,
    armor: 2,
    weaknesses: ['Sensible a Magia Curativa: Al ser una criatura de plaga y putrefacción, los conjuros curativos le hacen daño directo igual al Nivel de Poder en vez de curarle.'],
    pageReference: 75,
    attacks: [
      { type: 'rat_king_1', attack: 6, damage: { disease: 6 }, range: 'common:range.arms_length', description: 'monsters:attack.rat_king_1.description' },
      { type: 'rat_king_2', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.rat_king_2.description' },
      { type: 'rat_king_3', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.rat_king_3.description' },
      { type: 'rat_king_4', attack: 0, damage: { poison: { type: 'lethal', potency: 6 } }, range: 'common:range.near', description: 'monsters:attack.rat_king_4.description' },
      { type: 'rat_king_5', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.rat_king_5.description' },
      { type: 'rat_king_6', attack: 0, damage: { disease: 7 }, range: 'common:range.near', description: 'monsters:attack.rat_king_6.description' }
    ]
  },
  {
    id: 'rock_troll',
    name: 'common:monster.rock_troll',
    attributes: { ...defaultAttributes, strength: 28, agility: 2, wits: 2, empathy: 0 },
    movement: 1,
    skills: ['Exploración 4'],
    armor: '8 (Mitad de daño de estocadas y cortes)',
    traits: ['Regeneración: Recupera 1 punto de Fortaleza cada asalto.'],
    weaknesses: ['Sensible al sol: Recibe 5 puntos de daño cada asalto si está bajo la luz solar.'],
    pageReference: 79,
    attacks: [
      { type: 'rock_troll_1', attack: 10, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.rock_troll_1.description' },
      { type: 'rock_troll_2', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.rock_troll_2.description' },
      { type: 'rock_troll_3', attack: 12, damage: { blunt: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.rock_troll_3.description' },
      { type: 'rock_troll_4', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.rock_troll_4.description' },
      { type: 'rock_troll_5', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.rock_troll_5.description' },
      { type: 'rock_troll_6', attack: 8, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.rock_troll_6.description' }
    ]
  },
  {
    id: 'shapeshifter',
    name: 'common:monster.shapeshifter',
    attributes: { ...defaultAttributes, strength: 12, agility: 3, wits: 2, empathy: 0 },
    movement: 1,
    armor: 'Ninguna (Mitad de daño de armas físicas, nulo para estocadas. Daño doble para conjuros)',
    traits: ['Imitar a la Vida: Siempre asume la forma de la última criatura que haya devorado, obteniendo todas sus habilidades y puntuaciones. Si "muere" en esa forma imitada, vuelve a su estado gelatinoso de Cambiaformas para luchar.'],
    pageReference: 83,
    attacks: [
      { type: 'shapeshifter_1', attack: 7, damage: { poison: { type: 'paralyzing', potency: 6 } }, range: 'common:range.arms_length', description: 'monsters:attack.shapeshifter_1.description' },
      { type: 'shapeshifter_2', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.shapeshifter_2.description' },
      { type: 'shapeshifter_3', attack: 9, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.shapeshifter_3.description' },
      { type: 'shapeshifter_4', attack: 0, damage: { disease: 8 }, range: 'common:range.near', description: 'monsters:attack.shapeshifter_4.description' },
      { type: 'shapeshifter_5', attack: 8, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.shapeshifter_5.description' },
      { type: 'shapeshifter_6', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.shapeshifter_6.description' }
    ]
  },
  {
    id: 'skolopendra',
    name: 'common:monster.skolopendra',
    attributes: { ...defaultAttributes, strength: 24, agility: 2, wits: 1, empathy: 0 },
    movement: 1,
    armor: 4,
    traits: ['Atraída por cuerpos grandes: Prioriza atacar siempre al miembro del grupo con la mayor Fortaleza, incluyendo caballos u otras monturas, ya que los necesita como huésped para sus huevos.'],
    pageReference: 87,
    attacks: [
      { type: 'skolopendra_1', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.skolopendra_1.description' },
      { type: 'skolopendra_2', attack: 9, damage: { poison: { type: 'paralyzing', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.skolopendra_2.description' },
      { type: 'skolopendra_3', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.skolopendra_3.description' },
      { type: 'skolopendra_4', attack: 8, damage: { poison: { type: 'lethal', potency: 9 } }, range: 'common:range.near', description: 'monsters:attack.skolopendra_4.description' },
      { type: 'skolopendra_5', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.skolopendra_5.description' },
      { type: 'skolopendra_6', attack: 8, damage: { stab: 1 }, range: 'common:range.near', description: 'monsters:attack.skolopendra_6.description' }
    ]
  },
  {
    id: 'swarming_death',
    name: 'common:monster.swarming_death',
    attributes: { ...defaultAttributes, strength: 32, agility: 4, wits: 1, empathy: 0 },
    movement: 3,
    armor: 'Ninguna (Nunca recibe más de 1 punto de daño de ataques físicos normales. El fuego y conjuros ígneos le hacen doble daño)',
    traits: ['Enjambre: Al estar compuesto por miles de insectos, cuenta como una sola bestia pero no se puede interactuar verbal o físicamente de forma normal sin magia.'],
    pageReference: 91,
    attacks: [
      { type: 'swarming_death_1', attack: 7, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.swarming_death_1.description' },
      { type: 'swarming_death_2', attack: 0, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.swarming_death_2.description' },
      { type: 'swarming_death_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.short', description: 'monsters:attack.swarming_death_3.description' },
      { type: 'swarming_death_4', attack: 7, damage: { slash: 1 }, range: 'common:range.short', description: 'monsters:attack.swarming_death_4.description' },
      { type: 'swarming_death_5', attack: 0, damage: { poison: { type: 'paralyzing', potency: 7 } }, range: 'common:range.short', description: 'monsters:attack.swarming_death_5.description' },
      { type: 'swarming_death_6', attack: 12, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.swarming_death_6.description' }
    ]
  },
  {
    id: 'tupilaq',
    name: 'common:monster.tupilaq',
    attributes: { ...defaultAttributes, strength: 24, agility: 2, wits: 1, empathy: 1 },
    movement: 2,
    armor: 'Ninguna (Toma la mitad de daño de las armas no mágicas)',
    traits: ['Fuerza Concentrada: Son sirvientes necrománticos creados para matar a una víctima asignada. Cuando ataca a ese objetivo específico, todos sus ataques reciben una bonificación letal (mostrada en la descripción).'],
    pageReference: 95,
    attacks: [
      { type: 'tupilaq_1', attack: 7, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.tupilaq_1.description' },
      { type: 'tupilaq_2', attack: 8, damage: { slash: 1 }, range: 'common:range.near', description: 'monsters:attack.tupilaq_2.description' },
      { type: 'tupilaq_3', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.tupilaq_3.description' },
      { type: 'tupilaq_4', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.tupilaq_4.description' },
      { type: 'tupilaq_5', attack: 10, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.tupilaq_5.description' },
      { type: 'tupilaq_6', attack: 7, damage: { poison: { type: 'lethal', potency: 9 } }, range: 'common:range.arms_length', description: 'monsters:attack.tupilaq_6.description' }
    ]
  },
  {
    id: 'twisted_ent',
    name: 'common:monster.twisted_ent',
    attributes: { ...defaultAttributes, strength: 36, agility: 3, wits: 1, empathy: 1 },
    movement: 1,
    armor: 10,
    traits: ['Larvas Demoníacas: Su cuerpo genera larvas que puede enviar para atacar (Fuerza 5, Agilidad 2, ignoran armadura y emiten veneno).'],
    weaknesses: ['Sensible a la música: Al tener fragmentos del elfo que fue, si un aventurero tiene éxito con una tirada de Interpretación y toca hermosa música, el ent demoníaco se congelará, perdido en recuerdos del pasado.'],
    pageReference: 99,
    attacks: [
      { type: 'twisted_ent_1', attack: 8, damage: { fear: true }, range: 'common:range.short', description: 'monsters:attack.twisted_ent_1.description' },
      { type: 'twisted_ent_2', attack: 9, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.twisted_ent_2.description' },
      { type: 'twisted_ent_3', attack: 10, damage: { blunt: 2 }, range: 'common:range.near', description: 'monsters:attack.twisted_ent_3.description' },
      { type: 'twisted_ent_4', attack: 11, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.twisted_ent_4.description' },
      { type: 'twisted_ent_5', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.twisted_ent_5.description' },
      { type: 'twisted_ent_6', attack: 8, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.twisted_ent_6.description' }
    ]
  },
  {
    id: 'undead_dragon',
    name: 'common:monster.undead_dragon',
    attributes: { ...defaultAttributes, strength: 48, agility: 4, wits: 6, empathy: 3 },
    movement: 3,
    armor: 'Ninguna (Las armas punzantes no hacen nunca más de 1 daño. Mitad de daño de otros cortes y contusiones)',
    skills: ['Exploración 3', 'Saber 4', 'Perspicacia 3', 'Manipulación 4'],
    traits: ['Controlar Muertos Inquietos: Puede tomar el control de D10 de muertos inquietos de la zona para lanzarlos contra el grupo como un ataque masivo.'],
    pageReference: 103,
    attacks: [
      { type: 'undead_dragon_1', attack: 8, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.undead_dragon_1.description' },
      { type: 'undead_dragon_2', attack: 9, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.undead_dragon_2.description' },
      { type: 'undead_dragon_3', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.undead_dragon_3.description' },
      { type: 'undead_dragon_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.undead_dragon_4.description' },
      { type: 'undead_dragon_5', attack: 7, damage: { blunt: 1 }, range: 'common:range.near', description: 'monsters:attack.undead_dragon_5.description' },
      { type: 'undead_dragon_6', attack: 10, damage: { stab: 2 }, range: 'common:range.near', description: 'monsters:attack.undead_dragon_6.description' }
    ]
  },
  {
    id: 'vampyr',
    name: 'common:monster.vampyr',
    attributes: { ...defaultAttributes, strength: 18, agility: 4, wits: 4, empathy: 4 },
    movement: 1,
    armor: 'Depende de la armadura (suele usar Cota de Mallas y Gran Yelmo)',
    skills: ['Brío 4', 'Saber 4', 'Perspicacia 4'],
    traits: ['Regeneración por sangre: Recupera 1 de Fortaleza por cada 1 de daño infligido. Si no logra absorber sangre, pierde D6 de fuerza diarios.', 'Hipnosis Masiva: Puede controlar mentalmente a D10 PNJs débiles.'],
    pageReference: 107,
    attacks: [
      { type: 'vampyr_1', attack: 10, damage: { weapon: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.vampyr_1.description' },
      { type: 'vampyr_2', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.vampyr_2.description' },
      { type: 'vampyr_3', attack: 8, damage: { weapon: 1 }, range: 'common:range.near', description: 'monsters:attack.vampyr_3.description' },
      { type: 'vampyr_4', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.vampyr_4.description' },
      { type: 'vampyr_5', attack: 0, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.vampyr_5.description' },
      { type: 'vampyr_6', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.vampyr_6.description' }
    ]
  },
  {
    id: 'water_troll',
    name: 'common:monster.water_troll',
    attributes: { ...defaultAttributes, strength: 22, agility: 2, wits: 2, empathy: 1 },
    movement: 1,
    armor: 4,
    skills: ['Sigilo 6', 'Exploración 4'],
    traits: ['Regeneración: Recupera 1 punto de Fortaleza cada asalto.', 'Emboscada Acuática: Usa su valor de sigilo (6) para realizar un ataque con gran bonificación de sorpresa.'],
    weaknesses: ['Sensible a la luz solar: Sufre 1 punto de daño continuo cada ronda expuesto directamente al sol.'],
    pageReference: 111,
    attacks: [
      { type: 'water_troll_1', attack: 10, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.water_troll_1.description' },
      { type: 'water_troll_2', attack: 9, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.water_troll_2.description' },
      { type: 'water_troll_3', attack: 12, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.water_troll_3.description' },
      { type: 'water_troll_4', attack: 8, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.water_troll_4.description' },
      { type: 'water_troll_5', attack: 0, damage: { poison: { type: 'lethal', potency: 7 } }, range: 'common:range.near', description: 'monsters:attack.water_troll_5.description' },
      { type: 'water_troll_6', attack: 7, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.water_troll_6.description' }
    ]
  },
  {
    id: 'will_o_the_wisp',
    name: 'common:monster.will_o_the_wisp',
    attributes: { ...defaultAttributes, strength: 8, agility: 3, wits: 8, empathy: 1 },
    movement: 1,
    armor: 'Ninguna (Inmaterial. Solo sufre daño mágico o por fuego. Sufre la mitad de daño si su objeto vinculado sigue intacto)',
    traits: ['Atracción: Tienta a aventureros y animales a ir hacia él y hacia su trampa o muerte, requiriendo una tirada enfrentada de Intelecto constante.'],
    pageReference: 115,
    attacks: [
      { type: 'will_o_the_wisp_1', attack: 7, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.will_o_the_wisp_1.description' },
      { type: 'will_o_the_wisp_2', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.will_o_the_wisp_2.description' },
      { type: 'will_o_the_wisp_3', attack: 8, damage: { blunt: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.will_o_the_wisp_3.description' },
      { type: 'will_o_the_wisp_4', attack: 9, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.will_o_the_wisp_4.description' },
      { type: 'will_o_the_wisp_5', attack: 9, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.will_o_the_wisp_5.description' },
      { type: 'will_o_the_wisp_6', attack: 0, damage: { non_typical: 1 }, range: 'common:range.near', description: 'monsters:attack.will_o_the_wisp_6.description' }
    ]
  },
  {
    id: 'wolfshadow',
    name: 'common:monster.wolfshadow',
    attributes: { ...defaultAttributes, strength: 16, agility: 6, wits: 2, empathy: 1 },
    movement: 2,
    armor: '2 (pelo de oscuridad) + su armadura',
    skills: ['Exploración 5', 'Brío 5', 'Sigilo 4'],
    traits: ['Regeneración: Se cura devorando cadáveres enteros (hasta 3 de Fortaleza por asalto).', 'Destroza al Anfitrión: Entidad que posee a un huésped guerrero. El anfitrión debe superar Resistencia en combate o ceder su cuerpo totalmente a la forma de Sombra de Lobo.'],
    pageReference: 119,
    attacks: [
      { type: 'wolfshadow_1', attack: 8, damage: { fear: true }, range: 'common:range.near', description: 'monsters:attack.wolfshadow_1.description' },
      { type: 'wolfshadow_2', attack: 9, damage: { weapon: 1 }, range: 'common:range.near', description: 'monsters:attack.wolfshadow_2.description' },
      { type: 'wolfshadow_3', attack: 8, damage: { slash: 1 }, range: 'common:range.arms_length', description: 'monsters:attack.wolfshadow_3.description' },
      { type: 'wolfshadow_4', attack: 7, damage: { slash: 2 }, range: 'common:range.arms_length', description: 'monsters:attack.wolfshadow_4.description' },
      { type: 'wolfshadow_5', attack: 7, damage: { slash: 2 }, range: 'common:range.near', description: 'monsters:attack.wolfshadow_5.description' },
      { type: 'wolfshadow_6', attack: 10, damage: { weapon: 1 }, range: 'common:range.near', description: 'monsters:attack.wolfshadow_6.description' }
    ]
  }
]
