import { MonsterSkillListItem } from '../models/monster.model'

export type SkillListProps = {
  skills: MonsterSkillListItem[]
}

export const SkillList = ({ skills }: SkillListProps) => (
  <table className="w-full lg:w-1/2">
    <thead className="sr-only">
      <tr>
        <th>Skill</th>
        <th>Skill value</th>
      </tr>
    </thead>
    <tbody className="flex flex-wrap gap-4 lg:table-row-group">
      {skills.map((s) => (
        <tr key={s.name} className="flex gap-1 lg:table-row lg:border-b-[1px]">
          <td className="lg:p-1">{s.name}</td>
          <td className="lg:p-1 lg:text-right">{s.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
