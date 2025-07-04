import { type Transaction, categories } from "@/lib/types";

const today = new Date();
const getRandomDate = (daysAgo: number) => {
  const date = new Date();
  date.setDate(today.getDate() - Math.floor(Math.random() * daysAgo));
  return date.toISOString();
};

const mockTransactions: Transaction[] = [
  { id: "1", date: getRandomDate(30), description: "Trader Joe's", amount: 7523, category: "Groceries" },
  { id: "2", date: getRandomDate(30), description: "Monthly Rent", amount: 250000, category: "Rent" },
  { id: "3", date: getRandomDate(30), description: "Electricity Bill", amount: 12050, category: "Utilities" },
  { id: "4", date: getRandomDate(30), description: "Movie Night", amount: 4500, category: "Entertainment" },
  { id: "5", date: getRandomDate(30), description: "Gas", amount: 5530, category: "Transport" },
  { id: "6", date: getRandomDate(60), description: "Pharmacy", amount: 2500, category: "Health" },
  { id: "7", date: getRandomDate(60), description: "New Shoes", amount: 15000, category: "Shopping" },
  { id: "8", date: getRandomDate(60), description: "Coffee Shop", amount: 550, category: "Other" },
  { id: "9", date: getRandomDate(60), description: "Whole Foods", amount: 11200, category: "Groceries" },
  { id: "10", date: getRandomDate(90), description: "Internet Bill", amount: 8000, category: "Utilities" },
  { id: "11", date: getRandomDate(90), description: "Concert Tickets", amount: 22000, category: "Entertainment" },
  { id: "12", date: getRandomDate(90), description: "Metro Card", amount: 12700, category: "Transport" },
  { id: "13", date: getRandomDate(120), description: "Doctor's Visit", amount: 30000, category: "Health" },
  { id: "14", date: getRandomDate(120), description: "Bookstore", amount: 3500, category: "Shopping" },
  { id: "15", date: getRandomDate(120), description: "Dinner with Friends", amount: 9500, category: "Entertainment" },
  { id: "16", date: getRandomDate(150), description: "Safeway", amount: 9245, category: "Groceries" },
  { id: "17", date: getRandomDate(150), description: "Water Bill", amount: 4500, category: "Utilities" },
  { id: "18", date: getRandomDate(150), description: "Taxi", amount: 2350, category: "Transport" },
  { id: "19", date: getRandomDate(180), description: "Gym Membership", amount: 5000, category: "Health" },
  { id: "20", date: getRandomDate(180), description: "Amazon Order", amount: 6780, category: "Shopping" },
];

// Simulate API latency
const api = {
  getTransactions: async (): Promise<Transaction[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
};

export default api;
