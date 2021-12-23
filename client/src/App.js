import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './views/Welcome';
import Dashboard from './views/Dashboard';
import { ProtectedRoute, PublicRoute } from './helpers/authRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
