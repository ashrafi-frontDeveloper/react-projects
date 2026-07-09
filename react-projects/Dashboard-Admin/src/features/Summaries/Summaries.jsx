import { generateSummaries } from "../../utils/home"
import SummaryCard from "./components/SummaryCard"

export const Summaries = () => {

  const summaries = generateSummaries({
    productsLength: 2,
    usersLength: 77,
    ticketsLength: 36,
    adminsLength: 3,
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 gap-3 mt-7">
      {summaries.map(summary => <SummaryCard key={summary.id} {...summary} />)}
    </div>
  )
}