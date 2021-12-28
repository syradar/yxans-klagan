import React from 'react'
import 'twin.macro'
import { MonsterSkillListItem } from '../models/monster.model'

export interface SkillListProps {
  skills: MonsterSkillListItem[]
}

export const SkillList = ({ skills }: SkillListProps) => (
  <table tw="w-full sm:w-1/2">
    {skills.map((s) => (
      <tr key={s.name} tw="border-b-[1px]">
        <td tw="p-1">{s.name}</td>
        <td tw="p-1 text-right">{s.value}</td>
      </tr>
    ))}
  </table>
)
