import "./App.css";
import Auth from "./componets/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private_Componets from "./componets/Private_Componets";
import Dashboard from "./pages/Dashboard";
import CardsContainer from "./componets/CardsContainer";
import Product from "./pages/Product";
import AddProduct from "./componets/AddProduct";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
  
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Private_Componets />}>
            <Route path="/" element={<Dashboard />}>
              <Route path="/items" element={<CardsContainer />} />
              <Route path="/product" element={<Product />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Route>
          </Route>
          <Route path="/login" index element={<Auth />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
