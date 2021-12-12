import { Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import AllProduct from "./Components/AllProduct/allProduct";
import HotProduct from "./Components/AllProduct/hotDeals";
import NewProduct from "./Components/AllProduct/newIn";
import ProductUpload from "./Components/AllProduct/productUpload";
import AddAddress from "./Components/CheckOut/AddAddress/addAddress";
import CheckOut from "./Components/CheckOut/checkOut";
import Cart from "./Components/Context/Cart/cart";
import CartProvider from "./Components/Context/cartContext/cartProvider";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/home";
import MarchantDashboard from "./Components/MrcahantAccount/marchantDashboard";
import MarchantLoging from "./Components/MrcahantAccount/marchantLogin";
import MarchantSignUp from "./Components/MrcahantAccount/marchantSignUp";
import marchantSignNext from "./Components/MrcahantAccount/marchantSignUpNext";
import Navbar from "./Components/Navbar/Navbar";
import OrderCart from "./Components/OrderCart/orderCart";
import PaymentConfirm from "./Components/PaymentConfirm/paymentConfrm";
import ProductUnderShop from "./Components/ProductUnderShop/productUnderShop";
import ProductViewer from "./Components/ProductViewer/productViewer";
import ScrollToTop from "./Components/ScrollToTop";
import YourOrder from "./Components/YourOrder/yourOrder";

const App = () => {
  return (
    <CartProvider>
      <div style={{ marginBottom: "60px" }}>
        <Navbar />
      </div>

      <div className="main">
        <ScrollToTop />
        <Switch>
          <Route path="/marchant/dashboard/" component={MarchantDashboard} />
          <Route path="/marchant/signup/next/" component={marchantSignNext} />
          <Route path="/marchant/signup/" component={MarchantSignUp} />
          <Route path="/marchant/login/" component={MarchantLoging} />
          <Route path="/product/under/shop/:id/" component={ProductUnderShop} />
          <Route path="/add/cart/" component={Cart} />
          <Route path="/add/address/" component={AddAddress} />
          <Route path="/payment/confirm/" component={PaymentConfirm} />
          <Route path="/checkout/" component={CheckOut} />
          <Route path="/order/cart/" component={OrderCart} />
          <Route path="/your/order/" component={YourOrder} />
          <Route path="/product/upload/" component={ProductUpload} />
          <Route path="/product/view/:id/" component={ProductViewer} />
          <Route path="/product/hotdeal/" component={HotProduct} />
          <Route path="/product/newin/" component={NewProduct} />
          <Route path="/product/all/" component={AllProduct} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </CartProvider>
  );
};

export default App;
