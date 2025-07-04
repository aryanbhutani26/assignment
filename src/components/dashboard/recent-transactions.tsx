import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Transaction } from "@/lib/types"
import {
  ArrowLeftRight,
  Utensils,
  Home,
  Bolt,
  Film,
  Car,
  HeartPulse,
  ShoppingBag,
  CircleHelp,
} from "lucide-react"

const categoryIcons = {
  Groceries: <Utensils className="h-4 w-4" />,
  Rent: <Home className="h-4 w-4" />,
  Utilities: <Bolt className="h-4 w-4" />,
  Entertainment: <Film className="h-4 w-4" />,
  Transport: <Car className="h-4 w-4" />,
  Health: <HeartPulse className="h-4 w-4" />,
  Shopping: <ShoppingBag className="h-4 w-4" />,
  Other: <CircleHelp className="h-4 w-4" />,
}

interface RecentTransactionsProps {
  data: Transaction[];
}

export function RecentTransactions({ data }: RecentTransactionsProps) {
  const recentTransactions = data.slice(0, 5);

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          Your five most recent transactions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-muted text-muted-foreground">
                  {categoryIcons[transaction.category] || <ArrowLeftRight className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">{transaction.category}</p>
              </div>
              <div className="ml-auto font-medium">
                -₹{(transaction.amount / 100).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
