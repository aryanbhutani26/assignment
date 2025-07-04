import { type Transaction, categories } from "@/lib/types";

const mockTransactions: Transaction[] = [
  { id: "1", date: "2024-07-15T12:00:00Z", description: "Trader Joe's", amount: 7523, category: "Groceries" },
  { id: "2", date: "2024-07-14T12:00:00Z", description: "Monthly Rent", amount: 250000, category: "Rent" },
  { id: "3", date: "2024-07-13T12:00:00Z", description: "Electricity Bill", amount: 12050, category: "Utilities" },
  { id: "4", date: "2024-07-12T12:00:00Z", description: "Movie Night", amount: 4500, category: "Entertainment" },
  { id: "5", date: "2024-07-11T12:00:00Z", description: "Gas", amount: 5530, category: "Transport" },
  { id: "6", date: "2024-06-10T12:00:00Z", description: "Pharmacy", amount: 2500, category: "Health" },
  { id: "7", date: "2024-06-09T12:00:00Z", description: "New Shoes", amount: 15000, category: "Shopping" },
  { id: "8", date: "2024-06-08T12:00:00Z", description: "Coffee Shop", amount: 550, category: "Other" },
  { id: "9", date: "2024-06-07T12:00:00Z", description: "Whole Foods", amount: 11200, category: "Groceries" },
  { id: "10", date: "2024-05-06T12:00:00Z", description: "Internet Bill", amount: 8000, category: "Utilities" },
  { id: "11", date: "2024-05-05T12:00:00Z", description: "Concert Tickets", amount: 22000, category: "Entertainment" },
  { id: "12", date: "2024-05-04T12:00:00Z", description: "Metro Card", amount: 12700, category: "Transport" },
  { id: "13", date: "2024-04-03T12:00:00Z", description: "Doctor's Visit", amount: 30000, category: "Health" },
  { id: "14", date: "2024-04-02T12:00:00Z", description: "Bookstore", amount: 3500, category: "Shopping" },
  { id: "15", date: "2024-04-01T12:00:00Z", description: "Dinner with Friends", amount: 9500, category: "Entertainment" },
  { id: "16", date: "2024-03-15T12:00:00Z", description: "Safeway", amount: 9245, category: "Groceries" },
  { id: "17", date: "2024-03-14T12:00:00Z", description: "Water Bill", amount: 4500, category: "Utilities" },
  { id: "18", date: "2024-03-13T12:00:00Z", description: "Taxi", amount: 2350, category: "Transport" },
  { id: "19", date: "2024-02-12T12:00:00Z", description: "Gym Membership", amount: 5000, category: "Health" },
  { id: "20", date: "2024-02-11T12:00:00Z", description: "Amazon Order", amount: 6780, category: "Shopping" },
];

// Simulate API latency
const api = {
  getTransactions: async (): Promise<Transaction[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
};

export default api;
