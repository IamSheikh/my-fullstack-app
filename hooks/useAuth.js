import { createContext, useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

const AuthContext = createContext({
  user: null,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = jwt.decode(localStorage.getItem('token'));
      setUser(token);
      console.log(user);
    } else {
      setUser(null);
    }
  }, [user]);

  const login = (token) => {
    localStorage.setItem('token', token);
    const userDetails = jwt.decode(token);
    setUser(userDetails);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
