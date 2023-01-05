import { Pancake } from './Stack'

type ListProps = {
  children: React.ReactNode
}
export const List = ({ children }: ListProps) => {
  return (
    <div className="max-h-96 overflow-auto lg:max-h-[initial] xl:max-h-[initial] 2xl:max-h-[initial]">
      <Pancake>{children}</Pancake>
    </div>
  )
}
