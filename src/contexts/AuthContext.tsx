
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  gender?: string;
  zodiacSign: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    // Check for existing user on app start
    const savedUser = localStorage.getItem('zodiac_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('zodiac_user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Check if user exists in localStorage
      const savedUsers = localStorage.getItem('zodiac_users');
      const users = savedUsers ? JSON.parse(savedUsers) : [];
      
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('zodiac_user', JSON.stringify(userWithoutPassword));
      } else {
        throw new Error('البيانات غير صحيحة');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Omit<User, 'id'> & { password: string }) => {
    setIsLoading(true);
    try {
      // Get existing users or create empty array
      const savedUsers = localStorage.getItem('zodiac_users');
      const users = savedUsers ? JSON.parse(savedUsers) : [];
      
      // Check if user already exists
      const existingUser = users.find((u: any) => u.email === userData.email);
      if (existingUser) {
        throw new Error('المستخدم موجود بالفعل');
      }
      
      // Create new user
      const newUser: User & { password: string } = {
        ...userData,
        id: Date.now().toString(),
      };
      
      // Add to users array
      users.push(newUser);
      localStorage.setItem('zodiac_users', JSON.stringify(users));
      
      // Set current user (without password)
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('zodiac_user', JSON.stringify(userWithoutPassword));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zodiac_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
