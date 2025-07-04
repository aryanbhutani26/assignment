# Personal Finance Visualizer

A comprehensive personal finance tracking application built with modern web technologies to help you manage your money, track expenses, and stay within budget.

## 🚀 Features

### 💰 Transaction Management
- **Add/Edit/Delete** transactions with amount, date, and description
- **Transaction List View** with sorting and filtering capabilities
- **Form Validation** to ensure data integrity
- **Real-time Updates** with optimistic UI updates

### 📊 Data Visualization
- **Monthly Expenses Bar Chart** - Track spending trends over time
- **Category-wise Pie Chart** - Visual breakdown of spending by category
- **Budget vs Actual Comparison** - Monitor your budget performance
- **Interactive Charts** built with Recharts

### 🎯 Budget Management
- **Set Monthly Category Budgets** - Define spending limits for each category
- **Budget Tracking** - Real-time budget vs actual spending comparison
- **Spending Insights** - Simple analytics to understand your spending patterns
- **Budget Alerts** - Visual indicators when approaching budget limits

### 📱 Dashboard Overview
- **Summary Cards** displaying:
  - Total monthly expenses
  - Category-wise breakdown
  - Most recent transactions
  - Budget utilization
- **Responsive Design** that works on all devices
- **Error States** with proper handling and user feedback

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts for data visualization
- **Database**: MongoDB with Mongoose ODM
- **Deployment**: Vercel
- **State Management**: React Context + useReducer


## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- MongoDB instance (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-finance-visualizer.git
   cd personal-finance-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/finance-tracker
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Usage Guide

### Adding Transactions

1. Navigate to the **Transactions** page
2. Click **"Add Transaction"** button
3. Fill in:
   - Amount (required)
   - Date (defaults to today)
   - Description (optional)
   - Category (required)
   - Type (Income/Expense)
4. Click **"Save Transaction"**

### Managing Categories

1. Go to **Categories** section
2. View predefined categories or create custom ones
3. Edit category names and colors
4. Set category-specific budgets

### Setting Up Budgets

1. Navigate to **Budget** page
2. Set monthly limits for each category
3. Monitor budget vs actual spending
4. View spending insights and recommendations

### Dashboard Overview

The dashboard provides:
- **Quick Stats**: Total income, expenses, and savings
- **Monthly Trends**: Bar chart showing spending over time
- **Category Breakdown**: Pie chart of expenses by category
- **Recent Transactions**: Last 5 transactions
- **Budget Status**: Progress bars for each category


### Typography
- **Headings**: Inter font family
- **Body**: Inter font family
- **Monospace**: JetBrains Mono

### Components
All UI components are built with shadcn/ui for consistency and accessibility.

## 🔧 Configuration

### Database Models

**Transaction Model**
```javascript
{
  id: ObjectId,
  amount: Number,
  date: Date,
  description: String,
  category: String,
  type: 'income' | 'expense',
  createdAt: Date,
  updatedAt: Date
}
```

**Budget Model**
```javascript
{
  id: ObjectId,
  category: String,
  monthlyLimit: Number,
  month: String,
  year: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### API Endpoints

- `GET /api/transactions` - Fetch all transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/[id]` - Update transaction
- `DELETE /api/transactions/[id]` - Delete transaction
- `GET /api/categories` - Fetch categories
- `GET /api/budgets` - Fetch budgets
- `POST /api/budgets` - Create/update budget

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Set Environment Variables**
   - Add `MONGODB_URI` in Vercel dashboard
   - Add `NEXTAUTH_SECRET` and `NEXTAUTH_URL`

3. **Deploy**
   ```bash
   vercel --prod
   ```

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get connection string
4. Add to environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- [ ] Large datasets may cause performance issues
- [ ] Mobile responsiveness needs improvement on very small screens
- [ ] Bulk transaction import feature pending

## 🔮 Future Enhancements

- [ ] **Advanced Analytics**: Spending predictions, trend analysis
- [ ] **Multi-currency Support**: Handle different currencies
- [ ] **Receipt Scanner**: OCR for receipt processing
- [ ] **Bank Integration**: Connect with financial institutions
- [ ] **Expense Sharing**: Split bills with friends/family
- [ ] **Investment Tracking**: Portfolio management
- [ ] **Tax Reporting**: Generate tax-ready reports

## 📞 Support

For support, email support@financevisualizer.com or join our Discord community.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Recharts](https://recharts.org/) for chart components
- [Lucide React](https://lucide.dev/) for icons
- [Next.js](https://nextjs.org/) team for the amazing framework

---

**Made with ❤️ by Aryan Bhutani**

