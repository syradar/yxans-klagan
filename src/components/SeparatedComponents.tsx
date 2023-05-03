import { Fragment } from 'react'

type SeparatedComponentsProps = {
  components: React.ReactNode[]
  separator: React.ReactNode
}
export const SeparatedComponents = ({
  components,
  separator,
}: SeparatedComponentsProps) => {
  return (
    <>
      {components.map((component, index) => (
        <Fragment key={index}>
          {index > 0 ? separator : null}
          {component}
        </Fragment>
      ))}
    </>
  )
}
