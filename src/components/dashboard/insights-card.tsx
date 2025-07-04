import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export function InsightsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Key Insights
        </CardTitle>
        <Lightbulb className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground mt-2">
          <li className="flex items-start">
            <span className="mr-2 mt-1">💡</span>
            <span>Your spending on <span className="font-semibold text-foreground">Groceries</span> is up 15% this month.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1">💡</span>
            <span>You've spent <span className="font-semibold text-foreground">$450</span> on <span className="font-semibold text-foreground">Entertainment</span>. Consider setting a budget.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1">💡</span>
            <span>Great job! Your <span className="font-semibold text-foreground">Transport</span> costs are lower than average.</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
