import product1 from '../../../../uploads/products/product-1.png';
import product2 from '../../../../uploads/products/product-2.png';

export default function randomProductImage() {
  const images = [product1, product2];
  const random = Math.floor(Math.random() * images.length);

  return images[random];
}