export class ShoppingCart {
    private books: string[];

    constructor() {
        this.books = [];
    }

    public addBooks(booksToAdd: string[]): void {
        this.books.push(...booksToAdd);
    }

    public getContents(): string[] {
        return this.books;
    }

}