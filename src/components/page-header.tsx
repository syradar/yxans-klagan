type PageHeaderProps = {
  children?: React.ReactNode
}
export const PageHeader = ({ children }: PageHeaderProps) => (
  <h1 className="yx-heading text-2xl text-amber-700 lg:text-4xl">{children}</h1>
)
