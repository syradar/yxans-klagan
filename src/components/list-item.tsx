type ListItemButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}
export const ListItemButton = ({ children, onClick }: ListItemButtonProps) => (
  <button
    type="button"
    className="pointer-fine:hover:bg-red-500 pointer-fine:hover:border-red-500 w-full select-none rounded-none bg-white px-4 py-2 text-left text-sm text-black focus:outline-none"
    onClick={onClick}
  >
    {children}
  </button>
)
