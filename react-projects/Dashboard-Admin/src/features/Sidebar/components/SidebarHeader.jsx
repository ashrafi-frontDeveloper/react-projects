import { Link } from "react-router"

export const SidebarHeader = () => {
  return (
    <div className="pb-6 border-b primary-border-color">
      <Link className="flex items-center gap-3">
        <img src="images/logo.png" alt="Logo" className="size-6" />
        <span className="text-lg font-black text-zinc-900">پنل سبز</span>
      </Link>
    </div>
  )
}
