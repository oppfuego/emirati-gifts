import Top1 from "../components/Top1";
import CartItems from "../components/CartItems";
import Footer from "../components/Footer";
import "./CartDetails.css";
import Header from "../components/header/Header";

const CartDetails = () => {
  return (
      <>
          <Header/>
          <div className="cart-details-1920">
              <Top1
                  yourCart="Your Cart"
                  viewOrEditYourCartBeforeC="View or edit your cart before checkout"
              />
              <CartItems/>
              <Footer/>
          </div>
      </>

  );
};

export default CartDetails;
