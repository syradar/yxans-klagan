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

      <div tw="flex flex-wrap xl:(min-w-[600px]) gap-4">
        <div tw=" flex-basis[500px]">
          <Parchment>
            <KinNameList
              tw="p-0"
              title={'Eländare'}
              nameFunc={getRandomEländerName}
            ></KinNameList>
          </Parchment>
        </div>

        <div tw=" flex-basis[500px]">
          <Parchment>
            <KinNameList
              tw="p-0"
              title={'Alderlänningar'}
              nameFunc={getRandomAlderlänningarName}
            ></KinNameList>
          </Parchment>
        </div>

        <div tw=" flex-basis[500px]">
          <Parchment>
            <KinNameList
              tw="p-0"
              title={'Aslener'}
              nameFunc={getRandomAslenerName}
            ></KinNameList>
          </Parchment>
        </div>
      </div>
    </div>
  )
}
