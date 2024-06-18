import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CategoryRow.css";

const CategoryRow = ({
  className = "",
  svgImage1,
  travel,
  cruisesToursActivitesAttr,
  propLeft,
  propTop,
  propMargin,
}) => {
  const categoryRowStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const travelStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={`category-row ${className}`} style={categoryRowStyle}>
      <div className="category-column">
        <div className="category-item">
          <img
            className="svg-image-1-icon"
            loading="lazy"
            alt=""
            src={svgImage1}
          />
        </div>
        <div className="category-name">
          <div className="category-label">
            <b className="travel" style={travelStyle}>
              {travel}
            </b>
          </div>
          <div className="cruises-tours-activites">
            {cruisesToursActivitesAttr}
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryRow.propTypes = {
  className: PropTypes.string,
  svgImage1: PropTypes.string,
  travel: PropTypes.string,
  cruisesToursActivitesAttr: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propMargin: PropTypes.any,
};

export default CategoryRow;
