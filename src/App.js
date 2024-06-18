import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing1920x from "./pages/Landing1920x";
import Listings1920x from "./pages/Listings1920x";
import PDP1920x from "./pages/PDP1920x";
import Checkout from "./pages/Checkout";
import CartDetails from "./pages/CartDetails";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/listings-1920x":
        title = "";
        metaDescription = "";
        break;
      case "/pdp-1920x":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing1920x />} />
      <Route path="/listings-1920x" element={<Listings1920x />} />
      <Route path="/pdp-1920x" element={<PDP1920x />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart-details" element={<CartDetails />} />
      <Route path="/contact-us" element={<CartDetails/>} />
      <Route path="/legal" element={<RefundPolicy/>} />
    </Routes>
  );
}
export default App;
