import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './views/Welcome';
import Dashboard from './views/Dashboard';
import { ProtectedRoute, PublicRoute } from './helpers/authRoutes';
import Search from './views/Search';
import AddNote from './views/AddNote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="search" element={<Search />} />
            <Route path="new" element={<AddNote />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
