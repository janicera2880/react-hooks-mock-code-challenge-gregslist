import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  return (
    <main>
      <ul className="cards">
      {listings.map(listings => <ListingCard  key={listings.id} listings={listings}/>)}

      </ul>
    </main>
  );
}

export default ListingsContainer;
