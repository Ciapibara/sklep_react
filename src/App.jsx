import "./App.css";
import { productList } from "./productList";
import Card from "./components/card";

export default function App() {
  return (
    <div className="app">
      {productList.map((product, index) => {
        return (
          <Card
            key={index}
            image={product.imageSrc}
            alt={product.name}
            title={product.name}
            price={product.price}
          />
        );
      })}

      <h1>Zawartość koszyka:</h1>
    </div>
  );
}
