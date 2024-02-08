import { ShoppingCart } from '../basket';
import { calculatePrice } from './pricing';

describe('Pricing', () => {
  test('should return 0 for an empty basket', () => {
    const cart = new ShoppingCart();
    cart.addBooks([]);
    expect(calculatePrice(cart.getContents())).toEqual(0);
  });

  test('should return 8 for a single book', () => {
    const cart = new ShoppingCart();
    cart.addBooks(['book1']);
    expect(calculatePrice(cart.getContents())).toEqual(8);
  });

  test('should apply 5% discount for two different books', () => {
    const cart = new ShoppingCart();
    cart.addBooks(['book1', 'book2']);
    expect(calculatePrice(cart.getContents())).toBe(15.2);
  });

  test('should apply 10% discount for three different books', () => {
    const cart = new ShoppingCart();
    cart.addBooks(['book1', 'book2', 'book3']);
    expect(calculatePrice(cart.getContents())).toBe(21.6);
  });

  test('should apply 20% discount for four different books', () => {
    const cart = new ShoppingCart();
    cart.addBooks(['book1', 'book2', 'book3', 'book4']);
    expect(calculatePrice(cart.getContents())).toBe(25.6);
  });

  test('should apply 25% discount for five different books', () => {
    const cart = new ShoppingCart();
    cart.addBooks(['book1', 'book2', 'book3', 'book4', 'book5']);
    expect(calculatePrice(cart.getContents())).toBe(30);
  });

  test('should calculate the best price for a mixed basket', () => {
    const cart = new ShoppingCart();
    cart.addBooks([
      'book1',
      'book1',
      'book2',
      'book2',
      'book3',
      'book3',
      'book4',
      'book5',
    ]);
    expect(calculatePrice(cart.getContents())).toBe(51.2);
  });
});
