import React from 'react'
import 'twin.macro'
import { KinNameList, PageHeader, Parchment } from '../components'
import {
  getRandomAlderlänningarName,
  getRandomAslenerName,
  getRandomEländerName,
} from '../functions/name.functions'

export const NameGeneratorPage = () => {
  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>Namn</PageHeader>

      <div tw="grid grid-cols-2 gap-4">
        <div tw="max-w-prose w-full">
          <Parchment>
            <KinNameList
              title={'Eländare'}
              nameFunc={getRandomEländerName}
            ></KinNameList>
          </Parchment>
        </div>
        <div tw="max-w-prose w-full">
          <Parchment>
            <KinNameList
              title={'Alderlänningar'}
              nameFunc={getRandomAlderlänningarName}
            ></KinNameList>
          </Parchment>
        </div>
        <div tw="max-w-prose w-full">
          <Parchment>
            <KinNameList
              title={'Aslener'}
              nameFunc={getRandomAslenerName}
            ></KinNameList>
          </Parchment>
        </div>
      </div>
    </div>
  )
}
