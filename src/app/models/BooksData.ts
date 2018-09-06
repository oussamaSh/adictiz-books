import { BookItem } from './BookItem';
export class BooksData {

    public kind: String;
    public totalItems: number;
    public items: BookItem[];

    constructor() {
        this.items = [new BookItem()];
    }
}
