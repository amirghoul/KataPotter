# KataPotter

KataPotter is a TypeScript implementation of a pricing model for a series of books about a famous wizard called Potter. The problem involves calculating the total price of a shopping basket containing various combinations of Potter books, applying discounts based on the number of unique titles purchased.

## Project Structure

The project follows a modular structure with the Barrel Pattern for exporting symbols from each module. Here's an overview of the project structure:

```
kata-potter/
│
├── src/
│   ├── index.ts            # Main entry point
│   ├── modules/
│   │   ├── basket/
│   │   │   ├── basket.ts           # Module for managing the shopping basket
│   │   │   ├── basket.test.ts          # Unit tests for the basket module
│   │   │   └── index.ts            # Barrel file for basket module
│   │   ├── pricing/
│   │   │   ├── pricing.ts          # Module for calculating the price with discounts
│   │   │   ├── pricing.test.ts         # Unit tests for the pricing module
│   │   │   └── index.ts            # Barrel file for pricing module
│   │   └── utils/
│   │       ├── utils.ts            # Utility functions
│   │       └── index.ts            # Barrel file for utils module
│   └── index.ts                    # Exported symbols from modules
│

├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── jest.config.ts                  # Jest configuration
├── .gitignore                      # .gitignore configuration
└── README.md                       # Project documentation
```

The Barrel Pattern is employed to simplify the import/export process within the project. Each module directory contains an implementation file (e.g., `basket.ts`) and an `index.ts` file that re-exports the contents of the implementation file. This pattern enhances code organization, encapsulation, and readability.

## Description

The KataPotter project provides a solution to a problem where a pricing model for Harry Potter books is defined. The pricing model offers discounts based on the number of unique books purchased in a single transaction. The implementation aims to calculate the total price of a shopping basket with optimal discounts applied.

## Features

- **Shopping Basket Management**: The `basket.ts` module handles the addition and retrieval of books in the shopping basket.
- **Price Calculation**: The `pricing.ts` module calculates the total price of the shopping basket, applying discounts based on the number of unique books.
- **Unit Testing**: Unit tests for both the basket and pricing modules are provided in the `tests/` directory using Jest.
- **TypeScript**: The project is written in TypeScript, providing type safety and better developer experience.

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using npm or yarn.
3. Run tests to ensure everything is set up correctly.
4. Use the `index.ts` file as the entry point to interact with the pricing model and shopping basket.

## Usage

Example usage:

```typescript
import { calculatePrice } from './src/modules/pricing';
import { ShoppingCart } from './src/modules/basket';

const shoppingCart = new ShoppingCart();
shoppingCart.addBooks(['book1', 'book1', 'book2', 'book3', 'book4', 'book5']);
const totalPrice = calculatePrice(shoppingCart.getContents());
console.log('Total Price:', totalPrice);
```

## Contributing

Contributions are welcome! Feel free to open issues for feature requests, bug reports, or general discussions.

## Scripts

Here are the scripts defined in the `package.json` file:

- **start:dev**: Initiates the TypeScript file `src/index.ts` via `ts-node` for development.

- **test:dev**: Executes Jest tests from the `src/` directory for development.

- **build**: Compiles TypeScript files using the TypeScript compiler (`tsc`).

- **start:dist**: Launches the compiled JavaScript file `dist/src/index.js` via Node.js for distribution.

- **test:dist**: Executes Jest tests on compiled JavaScript files located in the `dist/tests` directory for distribution.
