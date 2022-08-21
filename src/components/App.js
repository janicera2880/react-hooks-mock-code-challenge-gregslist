import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
function App() {
const [listing, setListing] = useState([]);

useEffect (() => {
  fetch("http://localhost:6001/listings")
  .then(response => response.json())
  .then(data => setListing(data))
}, [])


  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listing} />
    </div>
  );
}

export default App;
