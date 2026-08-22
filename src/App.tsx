import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import UsersList from './pages/users/UsersList';
import CategoriesList from './pages/categories/CategoriesList';
import ProductsList from './pages/products/ProductsList';
import OrdersList from './pages/orders/OrdersList';
import OrderDetails from './pages/orders/OrderDetails';
import DestinationsList from './pages/destinations/DestinationsList';
import PaymentsList from './pages/payments/PaymentsList';
import PackagesList from './pages/packages/PackagesList';
import BookingsList from './pages/bookings/BookingsList';
import BannersList from './pages/banners/BannersList';
import NotificationsList from './pages/notifications/NotificationsList';
import SupportList from './pages/support/SupportList';
import Settings from './pages/settings/Settings';

// Mock auth check
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UsersList />} />
          <Route path="categories" element={<CategoriesList />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="destinations" element={<DestinationsList />} />
          <Route path="payments" element={<PaymentsList />} />
          <Route path="packages" element={<PackagesList />} />
          <Route path="bookings" element={<BookingsList />} />
          <Route path="banners" element={<BannersList />} />
          <Route path="notifications" element={<NotificationsList />} />
          <Route path="support" element={<SupportList />} />
          <Route path="settings" element={<Settings />} />
          {/* We will add more routes here soon */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
