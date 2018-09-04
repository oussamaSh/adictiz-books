import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksPipe'
})
export class BooksPipe implements PipeTransform {

  transform(allBooks: any, searchedTerm: any): any {
    if (searchedTerm === undefined || searchedTerm === '') {
      return allBooks;
    }
    return allBooks.filter(function (book) {
      return book.volumeInfo.title.toLowerCase().includes(searchedTerm.toLowerCase());
    });
  }
  /*transform(allBooks: any, title: any, language: any): any {
    if (title === undefined) { return 0; }
    let filteredBooks: any = [];
    // Filter each
    if (title) {
      filteredBooks = allBooks.filter(function (book) {
        return book.volumeInfo.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    if (language) {
      console.log("departure city", language);
      filteredBooks = allBooks.filter(function (book) {
        return book.volumeInfo.language.toLowerCase().includes(language.toLowerCase());
      });
    }
    if (language && title) {
      console.log("departure city", language);
      filteredBooks = allBooks.find(book => book.volumeInfo.language.toLowerCase().includes(language));


    console.log("filtered", filteredBooks);
    return filteredBooks;
  }
*/
}
