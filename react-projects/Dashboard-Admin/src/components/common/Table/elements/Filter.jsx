import { HiFilter } from "react-icons/hi"

export const Filter = () => {
  return (
    <button className="flex-center gap-1 border primary-border-color">
        <HiFilter className="text-lg" />
        <span className="text-sm">فیلتر</span>
    </button>
  )
}
