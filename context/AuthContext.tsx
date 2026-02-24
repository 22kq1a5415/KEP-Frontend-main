
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser && auth.token) {
      setAuth(prev => ({ ...prev, user: JSON.parse(savedUser), isAuthenticated: true }));
    }
  }, [auth.token]);

  const login = async (email: string, role: UserRole) => {
    // Mocking API call with detailed user metrics for dashboards
    const mockUser: User = {
      id: "KEP-" + Math.floor(1000 + Math.random() * 9000),
      name: email.split('@')[0].toUpperCase(),
      email,
      role,
      avatar: `https://picsum.photos/seed/${email}/200`,
      status: 'online',
      performance: 85,
      paymentStatus: role === UserRole.STUDENT ? 'pre' : undefined,
      paymentDueDate: role === UserRole.STUDENT ? '2024-05-15' : undefined
    };
    const mockToken = 'mock-jwt-token-' + Date.now();
    
    localStorage.setItem('token', mockToken);
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    setAuth({
      user: mockUser,
      token: mockToken,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuth({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
