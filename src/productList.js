import Product from "./product";

const phone = new Product(
  1,
  "phone",
  1699,
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/1/pr_2024_1_9_9_0_37_279_00.jpg",
  0
);
const monitor = new Product(
  2,
  "monitor",
  4449,
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/5/pr_2023_5_10_10_48_53_134_00.jpg",
  0
);
const laptop = new Product(
  3,
  "laptop",
  2299,
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/5/pr_2024_5_16_14_22_12_490_00.jpg",
  0
);

export const productList = [phone, monitor, laptop];
