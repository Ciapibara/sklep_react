import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";

export default function Card({ id, imageSrc, alt, name, price, clicked }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="My-Card">
      <div>
        <img src={imageSrc} alt={alt} />
      </div>

      <div>
        <h1>{name}</h1>
        Cena: {price}zł
      </div>

      <div>
        <label style={{ marginBottom: "1rem" }}>
          Ilość:
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button
          className="btn btn-primary"
          onClick={() => clicked({ id, name, price, quantity })}
        >
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
