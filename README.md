# E-Banking Frontend

This module contains the Angular frontend application for the E-Banking system.

## 🚀 Features

- **Responsive UI**: Built with Bootstrap for a clean and mobile-friendly interface.
- **Role-based Authentication**: Enforces security using route guards (`authenticationGuard`, `authorizationGuard`) for Admins and normal users.
- **Interactive Dashboard**: Features dynamic Bar and Pie charts (using `ng2-charts` & `Chart.js`) showing accounts distribution and monthly credit/debit operations.
- **Entity Management**: Interface to create, read, update, and search for Customers and Bank Accounts.
- **State & Routing**: Uses Angular robust routing and AppHttpInterceptor for appending JWT tokens to protected HTTP verbs.

## 🛠️ Technologies

- Angular 21 (TypeScript)
- Bootstrap 5
- Chart.js & ng2-charts
- RxJS

## 🚦 Getting Started

1. Navigate to the frontend directory:

   ```bash
   cd ebanking-frontend
   ```

2. Install dependencies (including ChartJS):

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   ng serve
   ```

4. Once the server is running, open your browser and navigate to `http://localhost:4200/`.
