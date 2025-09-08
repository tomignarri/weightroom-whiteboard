import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import { AuthProvider } from "./components/AuthProvider";
import { RequireAuth } from "./components/RequireAuth";

function App(): JSX.Element {
  // I know the home page is protected

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
