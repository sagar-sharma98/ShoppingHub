import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Products from "./components/Products";
import Product from "./components/Product";
import WishList from "./pages/WishList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}>
          <Route index element={<Products/>}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/product" element={<Product/>}></Route>
          <Route exact path="/wishlist" element={<WishList/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
