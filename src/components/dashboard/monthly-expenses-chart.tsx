"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Transaction } from "@/lib/types"

interface MonthlyExpensesChartProps {
  data: Transaction[];
}

export function MonthlyExpensesChart({ data }: MonthlyExpensesChartProps) {
  const monthlyExpenses = data.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString('default', { month: 'short', year: '2-digit' });
    const amount = transaction.amount / 100;
    if (!acc[month]) {
      acc[month] = { name: month, total: 0 };
    }
    acc[month].total += amount;
    return acc;
  }, {} as Record<string, { name: string; total: number }>);

  const chartData = Object.values(monthlyExpenses).sort((a,b) => {
    const [aMonth, aYear] = a.name.split(' ');
    const [bMonth, bYear] = b.name.split(' ');
    const aDate = new Date(`${aMonth} 1, 20${aYear}`);
    const bDate = new Date(`${bMonth} 1, 20${bYear}`);
    return aDate.getTime() - bDate.getTime();
  }).slice(-6); // Last 6 months

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Monthly Expenses</CardTitle>
        <CardDescription>A bar chart of your expenses over the last 6 months.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              cursor={{ fill: 'hsl(var(--muted))' }}
            />
            <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
