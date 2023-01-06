type PageHeaderProps = {
  children?: React.ReactNode
}
export const PageHeader = ({ children }: PageHeaderProps) => (
  <h1 className="yx-heading text-4xl text-amber-700 lg:text-6xl">{children}</h1>
)
