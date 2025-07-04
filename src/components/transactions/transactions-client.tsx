"use client"
import * as React from 'react'
import { getColumns } from './columns'
import { DataTable } from './data-table'
import { TransactionForm } from './transaction-form'
import { type Transaction } from '@/lib/types'
import { useToast } from "@/hooks/use-toast"

interface TransactionsClientProps {
  initialTransactions: Transaction[]
}

export function TransactionsClient({ initialTransactions }: TransactionsClientProps) {
  const [transactions, setTransactions] = React.useState(initialTransactions)
  const [isFormOpen, setIsFormOpen] = React.useState(false)
  const [editingTransaction, setEditingTransaction] = React.useState<Transaction | undefined>(undefined)
  const { toast } = useToast()

  const handleAdd = () => {
    setEditingTransaction(undefined);
    setIsFormOpen(true);
  }

  const handleEdit = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsFormOpen(true);
  }
  
  const handleDelete = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
    toast({
      title: "Transaction Deleted",
      description: "The transaction has been successfully deleted.",
    })
  }
  
  const handleFormSubmit = (transaction: Transaction) => {
    if (editingTransaction) {
      // Update
      setTransactions(prev => prev.map(t => t.id === transaction.id ? transaction : t))
      toast({
        title: "Transaction Updated",
        description: "Your transaction has been successfully updated.",
      })
    } else {
      // Add
      setTransactions(prev => [transaction, ...prev])
      toast({
        title: "Transaction Added",
        description: "Your new transaction has been successfully added.",
      })
    }
  }

  const columns = React.useMemo(() => getColumns(handleEdit, handleDelete), []);

  return (
    <>
      <DataTable
        columns={columns}
        data={transactions}
        onAdd={handleAdd}
      />
      <TransactionForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        onSubmit={handleFormSubmit}
        defaultValue={editingTransaction}
      />
    </>
  )
}
