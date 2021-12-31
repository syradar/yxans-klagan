import React from 'react'
import 'twin.macro'
import { MonsterSkillListItem } from '../models/monster.model'

export interface SkillListProps {
  skills: MonsterSkillListItem[]
}

export const SkillList = ({ skills }: SkillListProps) => (
  <table tw="w-full lg:(w-1/2)">
    <thead tw="sr-only">
      <tr>
        <th>Skill</th>
        <th>Skill value</th>
      </tr>
    </thead>
    <tbody tw="flex gap-4 flex-wrap lg:(table-row-group)">
      {skills.map((s) => (
        <tr key={s.name} tw="flex gap-1 lg:(table-row border-b-[1px])">
          <td tw="lg:p-1">{s.name}</td>
          <td tw="lg:(p-1 text-right)">{s.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
