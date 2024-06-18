import ItemFrame1 from "./ItemFrame1";
import ProductCardItems from "./ProductCardItems";
import PropTypes from "prop-types";
import "./SimilarProducts.css";

const SimilarProducts = ({ className = "" }) => {
  return (
    <div className={`similar-products ${className}`}>
      <b className="similar-cards">Similar Cards</b>
      <div className="similar-product-cards">
        <ItemFrame1
          image="/image1@2x.png"
          nintendo="Nintendo"
          japaneseMultinationalVide="Japanese multinational video game company headquartered in Kyoto. It develops, publishes and releases both video games"
        />
        <ProductCardItems
          image="/image-13@2x.png"
          playStation="PlayStation"
          playStationOneOfTheBigges="PlayStation: One of the biggest gaming platforms in the gaming industry"
        />
        <ProductCardItems
          image="/image-21@2x.png"
          playStation="Roblox"
          playStationOneOfTheBigges="Roblox is the ultimate virtual universe that lets you create, share experiences with friends."
          propWidth="133.6px"
          propDisplay="inline-block"
        />
        <ProductCardItems
          image="/image-31@2x.png"
          playStation="Playstore"
          playStationOneOfTheBigges="A digital distribution service operated and developed by Google."
          propWidth="unset"
          propDisplay="unset"
        />
      </div>
    </div>
  );
};

SimilarProducts.propTypes = {
  className: PropTypes.string,
};

export default SimilarProducts;
