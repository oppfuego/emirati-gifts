import CategoryRow from "./CategoryRow";
import PropTypes from "prop-types";
import "./Categories.css";

const Categories = ({ className = "" }) => {
  return (
    <section className={`categories ${className}`}>
      <h1 className="browse-by-categories">Browse by Categories</h1>
      <div className="category-grid">
        <CategoryRow
          svgImage1="/svgimage-1@2x.png"
          travel="Travel"
          cruisesToursActivitesAttr="Cruises, tours, activites, attractions, hotels, and transport to make your holidays an adventure to remember"
        />
        <CategoryRow
          svgImage1="/svgimage1-1@2x.png"
          travel="Sports"
          cruisesToursActivitesAttr="Shoes, tracksuits, backpacks, gloves workout clothes and gear to stay fit and be active."
          propLeft="568px"
          propTop="0px"
          propMargin="unset"
        />
        <CategoryRow
          svgImage1="/svgimage2-1@2x.png"
          travel={`Home & Design`}
          cruisesToursActivitesAttr="Homeware, kitchenware, rugs, cushions, lamps, and more to transform your living space."
          propLeft="1136px"
          propTop="0px"
          propMargin="0"
        />
        <CategoryRow
          svgImage1="/svgimage3-1@2x.png"
          travel="Gaming"
          cruisesToursActivitesAttr="Gaming consoles, headsets, keyboards, screens, and more accessories to elevate your gaming experience."
          propLeft="0px"
          propTop="624px"
          propMargin="unset"
        />
        <CategoryRow
          svgImage1="/svgimage6-2@2x.png"
          travel="Experiences"
          cruisesToursActivitesAttr="Music shows, outdoor adventures, wellness, art, culture, and dining for an immersive experience."
          propLeft="568px"
          propTop="624px"
          propMargin="unset"
        />
        <div className="category-row1">
          <div className="frame-container">
            <div className="svg-image7-1-wrapper">
              <img
                className="svg-image7-1-icon"
                loading="lazy"
                alt=""
                src="/svgimage7-1@2x.png"
              />
            </div>
            <h1 className="fashion-beauty">{`Fashion & Beauty`}</h1>
            <div className="clothing-footwear-accessorie">
              Clothing, footwear, accessories, skincare, wellness products,
              perfumes, and more to look and feel great everyday.
            </div>
          </div>
        </div>
      </div>
      <div className="browse-button">
        <button className="button6">
          <div className="button7">See all</div>
        </button>
      </div>
    </section>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
