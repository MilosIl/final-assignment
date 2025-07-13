# MyStore

MyStore is a single-page application that simulates an e-commerce platform. It offers the following features:

- Product Browsing: View all products with pagination
- Product Search: Search products by title
- Product Details: View detailed product information
- User Authentication: Login/logout functionality
- User Profile: View user profile details
- Theme Toggle: Switch between light and dark modes

The application connects to DummyJSON API for product and user data.

## Technology Stack

- Frontend Framework: React 18
- Build Tool: Vite
- State Management: Redux Toolkit
- Data Fetching: React Query
- Routing: React Router
- Styling: Tailwind CSS
- Form Handling: React Hook Form with Zod validation
- API Client: Axios

## Architecture

```
src/
├── api/              # API service calls
├── assets/           # Images and icons
├── components/       # UI components
├── constants/        # Application constants
├── containers/       # Container components (logic)
├── hooks/            # Custom hooks
├── layout/           # Layout components
├── pages/            # Page components
├── providers/        # Context providers
├── router/           # Routing configuration
├── services/         # Data fetching with React Query
├── store/            # Redux store configuration
└── utils/            # Utility functions
```
