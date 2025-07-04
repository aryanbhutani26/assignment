"use client"

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Transaction, Budget, Category } from "@/lib/types"

interface BudgetComparisonChartProps {
  transactions: Transaction[];
  budgets: Budget[];
}

export function BudgetComparisonChart({ transactions, budgets }: BudgetComparisonChartProps) {
  const actualSpending = transactions.reduce((acc, transaction) => {
    const category = transaction.category;
    const amount = transaction.amount / 100;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += amount;
    return acc;
  }, {} as Record<Category, number>);

  const budgetMap = budgets.reduce((acc, budget) => {
    acc[budget.category] = budget.amount / 100;
    return acc;
  }, {} as Record<Category, number>);

  const chartData = Object.keys(budgetMap).map(category => ({
    category,
    budget: budgetMap[category as Category],
    actual: actualSpending[category as Category] || 0,
  }));

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Budget vs. Actual Spending</CardTitle>
        <CardDescription>A comparison of your budgeted and actual spending by category.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} angle={-45} textAnchor="end" height={60} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              formatter={(value, name) => [`₹${(value as number).toFixed(2)}`, name.charAt(0).toUpperCase() + name.slice(1)]}
            />
            <Legend />
            <Line type="monotone" dataKey="budget" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Budget" />
            <Line type="monotone" dataKey="actual" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Actual" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
