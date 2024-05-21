import "./App.css";
import { productList } from "./productList";
import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [cartContents, setCartContents] = useState([]);

  const totalPrice = cartContents.reduce(
    (total, p) => total + p.quantity * p.price,
    0
  );

  const addToCart = (product) => {
    if (
      !cartContents.some((p) => p.name === product.name) &&
      product.quantity > 0
    ) {
      setCartContents([...cartContents, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartContents(cartContents.filter((p) => p.id !== id));
  };

  return (
    <>
      {productList.map(({ id, imageSrc, name, price, quantity }) => (
        <Card
          key={id}
          id={id}
          imageSrc={imageSrc}
          alt={name}
          name={name}
          price={price}
          quantity={quantity}
          clicked={addToCart}
        />
      ))}

      <h1>Zawartość koszyka:</h1>
      {cartContents.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <td>Lp.</td>
              <td>Produkt</td>
              <td>Cena jednostkowa</td>
              <td>Ilość</td>
              <td>Cena całkowita</td>
              <td>Akcja</td>
            </tr>
          </thead>
          <tbody>
            {cartContents.map(
              ({ id, name, price, quantity }, index) =>
                quantity > 0 && (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{price} zł</td>
                    <td>{quantity}</td>
                    <td>{price * quantity} zł</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(id)}
                      >
                        Usuń
                      </button>
                    </td>
                  </tr>
                )
            )}
            <tr>
              <td colSpan={5}>
                Suma: <b>{totalPrice}</b> zł
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}
