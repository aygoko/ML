import React, { createContext, useState, useEffect } from 'react';
import { authenticateUser } from '../services/api';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setIsAuthenticated(true);
          setUser({ token });
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  const login = async (email, password) => {
    try {
      const { token } = await authenticateUser(email, password);
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      setUser({ token });
    } catch (error) {
      console.error('Ошибка входа:', error);
      throw error; 
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        loading, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};
