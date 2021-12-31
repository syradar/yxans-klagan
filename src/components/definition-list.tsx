import React from 'react'
import 'twin.macro'
import { Definition } from '../types/definition.type'

export interface DefinitionListProps {
  definitions: Definition[]
}

export const DefinitionList = ({ definitions }: DefinitionListProps) => (
  <ul tw="flex flex-col lg:gap-2">
    {definitions.map((d) => (
      <li
        key={d.name}
        tw="list-style[square] list-inside marker:(text-red-500) lg:(list-none)"
      >
        <div tw="font-medium inline -ml-3 mr-1 after:(content[':']) lg:(block m-0 after:hidden)">
          {d.name}
        </div>
        <div tw="inline lg:block">{d.description}</div>
      </li>
    ))}
  </ul>
)
