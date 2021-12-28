import React from 'react'
import 'twin.macro'
import { Definition } from '../types/definition.type'

export interface DefinitionListProps {
  definitions: Definition[]
}

export const DefinitionList = ({ definitions }: DefinitionListProps) => (
  <ul tw="flex flex-col">
    {definitions.map((d) => (
      <li key={d.name}>
        <div tw="font-medium">{d.name}</div>
        <div tw="mb-2">{d.description}</div>
      </li>
    ))}
  </ul>
)
