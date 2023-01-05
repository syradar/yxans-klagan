import { MonsterSkillListItem } from '../models/monster.model'

export type SkillListProps = {
  skills: MonsterSkillListItem[]
}

export const SkillList = ({ skills }: SkillListProps) => (
  <table className="lg:(w-1/2) w-full">
    <thead className="sr-only">
      <tr>
        <th>Skill</th>
        <th>Skill value</th>
      </tr>
    </thead>
    <tbody className="lg:(table-row-group) flex flex-wrap gap-4">
      {skills.map((s) => (
        <tr key={s.name} className="lg:(table-row border-b-[1px]) flex gap-1">
          <td className="lg:p-1">{s.name}</td>
          <td className="lg:(p-1 text-right)">{s.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
