"use client";

import { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  user: { email: string } | null;
  isAdmin: boolean;
  isAssociated: boolean;
  login: (email: string) => void;
  logout: () => void;
  associatedMembers: string[];
  addAssociatedMember: (email: string) => void;
  removeAssociatedMember: (email: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [associatedMembers, setAssociatedMembers] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) setUser(JSON.parse(storedUser));
    
    const storedMembers = localStorage.getItem('associatedMembers');
    if (storedMembers) setAssociatedMembers(JSON.parse(storedMembers));
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('associatedMembers', JSON.stringify(associatedMembers));
    }
  }, [associatedMembers, mounted]);

  const login = (email: string) => {
    const newUser = { email };
    setUser(newUser);
    localStorage.setItem('mockUser', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
  };

  const addAssociatedMember = (email: string) => {
    if (!associatedMembers.includes(email)) {
      setAssociatedMembers([...associatedMembers, email]);
    }
  };

  const removeAssociatedMember = (email: string) => {
    setAssociatedMembers(associatedMembers.filter(e => e !== email));
  };

  const isAdmin = user?.email === 'patrikpotenza0@gmail.com';
  const isAssociated = isAdmin || (user ? associatedMembers.includes(user.email) : false);

  return (
    <AuthContext.Provider value={{ user, isAdmin, isAssociated, login, logout, associatedMembers, addAssociatedMember, removeAssociatedMember }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
