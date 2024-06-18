import Top1 from "../components/Top1";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import "./Checkout.css";

const Checkout = () => {
  return (
      <>
            <Header/>
          <div className="checkout-1920">
              <Top1
                  yourCart="Checkout"
                  viewOrEditYourCartBeforeC="View or edit your cart before checkout"
              />
              <Content/>
              <Footer/>
          </div>
      </>

  );
};

export default Checkout;
