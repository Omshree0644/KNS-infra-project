
import "./style.css";
import masterplan from "../../../assets/images/masterplan.png";
import Button from "../../ui/Button/button";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";

function UnitsSection() {
  const [selectedSize, setSelectedSize] = useState("30 × 40");

  return (
    <section className="unit-section">

      <h2>Unit Configurations</h2>

      <p>
        Choose from our thoughtfully designed configurations
        that suit your lifestyle.
      </p>

      <div className="unit-container">

        {/* Master Plan */}
        <div className="unit-masterplan">
          <img src={masterplan} alt="Project Master Plan" />
        </div>

        {/* Unit Details */}
        <div className="unit-details">

          {/* Plot Size Buttons */}
          <div className="plot-tabs">
            {["30 × 40", "30 × 45", "30 × 50", "40 × 60"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "active" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Plot Information */}
          <div className="plot-info">
            <h3>30 × 40 - 9.14M × 12.19M</h3>

            <p className="plot-area">
              Super Built-up Area: <strong>1200 sq.ft</strong>
            </p>

            <p className="plot-price">
              Starting Price: Request for Pricing
            </p>
          </div>

          {/* Action Buttons */}
          <div className="unit-actions">
            <Button variant="outline"> <WysiwygIcon />View Brochure</Button>
            <Button variant="gold"> <ShareIcon />Share Project</Button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default UnitsSection;
