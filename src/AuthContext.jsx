import React, { createContext, useState, useEffect } from "react";
const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [productList, setProductList] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    // Check token expiry on app initialization
    checkTokenExpiry();
  }, []);

  const checkTokenExpiry = () => {
    const storedToken = localStorage.getItem('token');
    console.log(storedToken,"this is stored ")
    if (storedToken) {
      // Here you would normally check if the token is expired
      // For simplicity, we'll just assume the token is valid for 30 seconds
      // const decodedToken = jwt_decode(storedToken);
      // const expiry = decodedToken.exp * 1000;
      // const isTokenValid = expiry > Date.now();
     const isTokenValid =true
      if (!isTokenValid) {
        // Token expired, log out
        logout();
      } else {
        // Token valid, set authentication state
        setToken(storedToken);
        setIsAuthenticated(true);
      }
    }
  };

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
    localStorage.clear();
  };
  const productDetails=(productlist)=>{
    setProductList(productlist)
  }
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,productDetails,productList,modalShow,setModalShow }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
