import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import { useRef } from "react";

const Shop = () => {
  const newCollectionsRef = useRef(null);

  return (
    <div>
      <Hero
        scrollToNewCollections={() =>
          newCollectionsRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Popular />
      <Offers />
      <NewCollections ref={newCollectionsRef} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
