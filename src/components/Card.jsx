import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./card.css";

export default function Card({ image, alt, title, price }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="My-Card">
      <div>
        <img src={image} alt={alt} />
      </div>

      <div>
        <h1>{title}</h1>
        Cena: {price}zł
      </div>

      <div>
        <label style={{ marginBottom: "1rem" }}>
          Ilość:
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </label>
        <button className="btn btn-primary">Dodaj do koszyka</button>
      </div>
    </div>
  );
}
