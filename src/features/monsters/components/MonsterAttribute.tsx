import { AttributeCheckbox } from '../../../components/attribute-cheeckbox'
import { chunkArray } from '../../../functions/array.functions'
import { WithId, withId } from '../../../functions/utils.functions'

type MonsterAttributeProps = {
  label: string
  values: WithId<boolean>[]
}

export const MonsterAttribute = ({ label, values }: MonsterAttributeProps) => {
  return (
    <div className="backface-hidden">
      <label className="mb-1 block font-medium" htmlFor="monster-strength">
        {label}: {values.length}
      </label>
      <div
        id={`monster-${label}-grid`}
        className="flex max-w-[fit-content] flex-wrap gap-x-4 gap-y-1"
      >
        {chunkArray(values)
          .map(withId)
          .map((chunk) => (
            <div className="flex gap-1" key={chunk.id}>
              {chunk.value.map((item) => (
                <AttributeCheckbox key={item.id}></AttributeCheckbox>
              ))}
            </div>
          ))}
      </div>
    </div>
  )
}
