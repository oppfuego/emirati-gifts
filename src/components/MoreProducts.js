import ProductCardItems from "./ProductCardItems";
import ItemFrame1 from "./ItemFrame1";
import PropTypes from "prop-types";
import "./MoreProducts.css";

const MoreProducts = ({ className = "" }) => {
  return (
    <div className={`more-products ${className}`}>
      <div className="more-product-cards">
        <ProductCardItems
          image="/image-82@2x.png"
          playStation="Spotify"
          playStationOneOfTheBigges="Spotify is a digital music service that gives you access to millions of songs."
          propWidth="unset"
          propDisplay="unset"
        />
        <ItemFrame1
          image="/image-92@2x.png"
          nintendo="instacart"
          japaneseMultinationalVide="Instacart is an American delivery company based in San  Francisco that operates a grocery delivery and pick-up service."
          propHeight="unset"
          propDisplay="unset"
        />
        <ItemFrame1
          image="/image-72@2x.png"
          nintendo="Best Buy"
          japaneseMultinationalVide="Best Buy is an American multinational consumer electronics retailer headquartered in Richfield, Minnesota."
          propHeight="66px"
          propDisplay="inline-block"
        />
        <ProductCardItems
          image="/image-112@2x.png"
          playStation="Chipotle"
          playStationOneOfTheBigges="Order tacos, burritos, salads, bowls and more at Chipotle Mexican Grill."
          propWidth="unset"
          propDisplay="unset"
        />
      </div>
      <div className="load-button-container">
        <button className="button20">
          <b className="button21">See all</b>
        </button>
      </div>
    </div>
  );
};

MoreProducts.propTypes = {
  className: PropTypes.string,
};

export default MoreProducts;
