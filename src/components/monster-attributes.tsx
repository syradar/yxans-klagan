import { chunkArray } from '../functions/array.functions'
import { AttributeCheckbox } from './attribute-cheeckbox'

type MonsterAttributeProps = {
  label: string
  values: boolean[]
}

export const MonsterAttribute = ({ label, values }: MonsterAttributeProps) => {
  return (
    <div className="backface-hidden">
      <label className="mb-1 block font-medium" htmlFor="monster-strength">
        {label}: {values.length}
      </label>
      <div
        id={`monster-${label}-grid`}
        className="grid max-w-[fit-content] grid-cols-2 gap-x-4 gap-y-1"
      >
        {chunkArray(values).map((chunk, chunkIndex) => (
          <div className="flex gap-1" key={`${label}-${chunkIndex}`}>
            {chunk.map((_, index) => (
              <AttributeCheckbox
                key={`${label}-${chunkIndex}-${index}`}
              ></AttributeCheckbox>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
