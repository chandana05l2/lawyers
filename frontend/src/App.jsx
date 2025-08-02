import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cases from "./components/Cases";
import Blog from "./components/Blog";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PrivateRoute from "./pages/Privateroute";





// Create and export the auth context
export const authContext = createContext(null);

// Fake auth provider (can be replaced by real auth logic)
const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // simulate async
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

// Initialize React Query client
const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <authContext.Provider value={{ user, setUser, fakeAuthProvider }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Navigate to="/signin" />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />

                {/* Protected Routes */}
                <Route
                  path="/home"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
               
                <Route
                  path="/about"
                  element={
                    <PrivateRoute>
                      <About />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/cases"
                  element={
                    <PrivateRoute>
                      <Cases />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/blog"
                  element={
                    <PrivateRoute>
                      <Blog />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <PrivateRoute>
                      <Services />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PrivateRoute>
                      <Contact />
                    </PrivateRoute>
                  }
                />
              </Routes>
              
            </main>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </authContext.Provider>
  );
};

export default App;
