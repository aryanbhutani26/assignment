export const categories = ["Groceries", "Rent", "Utilities", "Entertainment", "Transport", "Health", "Shopping", "Other"] as const;

export type Category = typeof categories[number];

export interface Transaction {
  id: string;
  date: string; // ISO 8601 format
  description: string;
  amount: number; // in cents
  category: Category;
}
