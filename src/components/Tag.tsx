type TagProps = {
  children: React.ReactNode
}
export const Tag = ({ children }: TagProps) => (
  <div className="rounded-md border-[1px] border-gray-300 px-1 py-0.5 text-sm font-medium text-gray-600">
    {children}
  </div>
)
