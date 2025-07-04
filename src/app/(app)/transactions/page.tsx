import api from "@/lib/data";
import { TransactionsClient } from "@/components/transactions/transactions-client";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { PageHeader } from "@/components/page-header";

async function TransactionsData() {
  const transactions = await api.getTransactions();
  return <TransactionsClient initialTransactions={transactions} />;
}

function TransactionsLoading() {
  return (
    <div>
      <PageHeader title="Transactions" description="Manage and review all your transactions.">
        <Skeleton className="h-10 w-36" />
      </PageHeader>
      <div className="p-4 sm:px-6 lg:px-8">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="p-4 sm:px-6 lg:px-8">
        <Skeleton className="h-96 w-full rounded-md" />
      </div>
    </div>
  )
}

export default function TransactionsPage() {
  return (
    <Suspense fallback={<TransactionsLoading />}>
      <TransactionsData />
    </Suspense>
  );
}
