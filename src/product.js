export default class Product {
  constructor(id, name, price, imageSrc, quantity = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageSrc = imageSrc;
    this.quantity = quantity;
  }
}
