import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform where businesses can sell
          products or services to customers. It's a digital storefront that
          allows users to browse, select, and purchase items or services, often
          including features like secure payment processing, inventory
          management, and customer service tools. Essentially, it facilitates
          online transactions between buyers and sellers.
        </p>
        <p>
          A curated collection of stylish and comfortable apparel for every
          occasion. Whether you're searching for a casual look, a stylish outfit
          for a night out, or a professional wardrobe, you'll find something
          that suits your style and needs.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
