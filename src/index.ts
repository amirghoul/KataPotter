import { calculatePrice } from './modules/pricing';
import { ShoppingCart } from './modules/basket';
import { BOOK_NAMES } from './modules/utils';

// Example usage:
const shoppingCart = new ShoppingCart();
shoppingCart.addBooks([
  BOOK_NAMES[0],
  BOOK_NAMES[0],
  BOOK_NAMES[1],
  BOOK_NAMES[1],
  BOOK_NAMES[2],
  BOOK_NAMES[2],
  BOOK_NAMES[3],
  BOOK_NAMES[4],
]);

const totalPrice = calculatePrice(shoppingCart.getContents());

console.log('Total Price:', totalPrice);
