import React, {useState} from "react";

function ListingCard({listings}) {

  const [favorite, setFavorite] = useState(false)
  const [remove, setRemove] = useState(true)

  function handleClick(){
    setFavorite(!favorite)
  }

  function handleRemove(){
    setRemove(!remove)
    }

    return (
      <li className="card">
        <div className="image">
          <span className="price">$0</span>
          <img src={listings.image} alt={listings.name} />
        </div>
        <div className="details">
          {favorite ? (
          <button  onClick={handleClick}  className="emoji-button favorite active">★</button>
          ) : (
            <button onClick={handleClick} className="emoji-button favorite">☆</button>
          )}
          <strong>{listings.description}</strong>
          <span> · {listings.location}</span>
          <button onClick={handleRemove}  className="emoji-button delete">🗑</button>
        </div>
      </li>
    );
  }

export default ListingCard;
