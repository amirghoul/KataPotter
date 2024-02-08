import { ShoppingCart } from './basket';

describe('ShoppingCart', () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test('initial cart is empty', () => {
    expect(cart.getContents()).toEqual([]);
  });

  test('adding books to the cart', () => {
    cart.addBooks(['Book1', 'Book2']);
    expect(cart.getContents()).toEqual(['Book1', 'Book2']);
  });

  test('adding multiple books to the cart', () => {
    cart.addBooks(['Book1', 'Book2']);
    cart.addBooks(['Book3', 'Book4']);
    expect(cart.getContents()).toEqual(['Book1', 'Book2', 'Book3', 'Book4']);
  });

  test('adding empty array of books does not change cart', () => {
    cart.addBooks(['Book1', 'Book2']);
    cart.addBooks([]);
    expect(cart.getContents()).toEqual(['Book1', 'Book2']);
  });

  test('adding empty array of books initially', () => {
    cart.addBooks([]);
    expect(cart.getContents()).toEqual([]);
  });
});
