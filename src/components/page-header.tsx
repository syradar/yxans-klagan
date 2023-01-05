type PageHeaderProps = {
  children?: React.ReactNode
}
export const PageHeader = ({ children }: PageHeaderProps) => (
  <h1 className="yx-heading text-center text-4xl lg:text-6xl">{children}</h1>
)
