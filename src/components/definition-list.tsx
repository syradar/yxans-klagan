import { ComponentPropsWithRef } from 'react'
import { Definition } from '../@types/definition.type'

export type DefinitionListProps = ComponentPropsWithRef<'ul'> & {
  definitions: Definition[]
}

export const DefinitionList = ({ definitions }: DefinitionListProps) => (
  <ul className="flex flex-col gap-2">
    {definitions.map((d) => (
      <li key={d.name} className="">
        <span className="font-medium">
          {d.name}
          <span className="hidden sm:inline">{': '}</span>
        </span>
        <span className="block sm:inline">{d.description}</span>
      </li>
    ))}
  </ul>
)
