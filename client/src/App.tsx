import "./App.css";
import Detail from "./pages/detail/Detail";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ModalGlass from "./commons/ModalGlass";
import ModalGlass2 from "./commons/ModalGlass2";
import ModalGlass3 from "./commons/ModalGlass3";
import ModalGlass4 from "./commons/ModalGlass4";
import Payment1 from "./pages/payment/Payment1";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import HomeAdmin from "./pages/admin/HomeAdmin/HomeAdmin";
import ProductAdmin from "./pages/admin/ProductAmin/ProductAdmin";
import ProductDetail from "./pages/admin/ProductDetail/ProductDetail";
import AddProduct from "./pages/admin/AddProduct/AddProduct";
import OrderChecking from "./pages/orderChecking/OrderChecking";
function App() {
  return (
    <>
      <Routes>
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderCheck" element={<OrderChecking />} />

        <Route
          path="/search"
          element={
            <ModalGlass
              handleCloseModal={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="/gender/:idGender" element={<ModalGlass2 />} />
        <Route
          path="/gender/:idGender/face/:idFace"
          element={<ModalGlass3 />}
        />
        <Route path="/search4" element={<ModalGlass4 />} />
        <Route path="/payment" element={<Payment1 />} />

        <Route path="/admin" element={<HomeAdmin />}>
          <Route path="products">
            <Route index element={<ProductAdmin />} />
          </Route>
          <Route path="products/:id">
            <Route index element={<ProductDetail />} />
          </Route>
          <Route path="addProduct">
            <Route index element={<AddProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
