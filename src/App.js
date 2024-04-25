import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Products from "./components/Products";
import Product from "./components/Product";
import WishList from "./pages/WishList";
import SingupPage from "./pages/SingupPage";
import LoginPage from "./pages/loginPage";
import LogoutPage from "./pages/LogoutPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}>
          <Route index element={<Products/>}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/product" element={<Product/>}></Route>
          <Route exact path="/wishlist" element={<WishList/>}></Route>
          <Route exact path="/category" element={<CategoryPage/>}></Route>
          <Route exact path="/signup" element={<SingupPage/>}></Route>
          <Route exact path="/login" element={<LoginPage/>}></Route>
          <Route exact path="/logout" element={<LogoutPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
