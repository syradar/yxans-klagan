import { Definition } from '../types/definition.type'

export interface DefinitionListProps {
  definitions: Definition[]
}

export const DefinitionList = ({ definitions }: DefinitionListProps) => (
  <ul className="flex flex-col lg:gap-2">
    {definitions.map((d) => (
      <li
        key={d.name}
        className="list-inside list-square marker:text-red-500 lg:list-none"
      >
        <div className="m-0 -ml-3 mr-1 inline font-medium after:content-[':'] lg:block lg:after:hidden">
          {d.name}
        </div>
        <div className="inline lg:block">{d.description}</div>
      </li>
    ))}
  </ul>
)
