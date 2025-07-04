import { IndianRupee, BarChart, TrendingUp } from "lucide-react";

import { SummaryCard } from "@/components/dashboard/summary-card";
import { PageHeader } from "@/components/page-header";
import { MonthlyExpensesChart } from "@/components/dashboard/monthly-expenses-chart";
import { CategoryPieChart } from "@/components/dashboard/category-pie-chart";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { InsightsCard } from "@/components/dashboard/insights-card";
import api from "@/lib/data";

export default async function DashboardPage() {
  const transactions = await api.getTransactions();
  const totalExpenses = transactions.reduce((sum, t) => sum + t.amount, 0) / 100;
  
  const mostSpentCategory = Object.entries(
    transactions.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {} as Record<string, number>)
  ).sort(([, a], [, b]) => b - a)[0]?.[0] || 'N/A';


  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Here's a summary of your financial activity."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-6">
        <SummaryCard 
          title="Total Expenses"
          value={`₹${totalExpenses.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={<IndianRupee className="h-4 w-4 text-muted-foreground" />}
          description="Total expenses across all transactions"
        />
        <SummaryCard 
          title="Transactions"
          value={transactions.length.toString()}
          icon={<BarChart className="h-4 w-4 text-muted-foreground" />}
          description="Total number of transactions recorded"
        />
         <SummaryCard 
          title="Highest Spending"
          value={mostSpentCategory}
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          description="Your top spending category"
        />
        <InsightsCard />
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:p-6 lg:grid-cols-3">
        <MonthlyExpensesChart data={transactions} />
        <CategoryPieChart data={transactions} />
      </div>
       <div className="grid grid-cols-1 gap-4 p-4 md:p-6 lg:grid-cols-3">
        <RecentTransactions data={transactions} />
      </div>
    </>
  );
}
