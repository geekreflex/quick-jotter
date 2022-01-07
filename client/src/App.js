import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { ProtectedRoute, PublicRoute } from './helpers/authRoutes';
import Search from './views/Search';
import AddNote from './views/AddNote';
import ViewNote from './views/ViewNote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
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
            <Route path="note" element={<ViewNote />}>
              <Route path=":noteId" element={<ViewNote />} />
            </Route>
            <Route path="new" element={<AddNote />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
