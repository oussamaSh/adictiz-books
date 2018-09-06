import { async } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksPipe'
})
export class BooksPipe implements PipeTransform {

  transform(allBooks: any, searchedTerm: any): any {
    if (searchedTerm === undefined || searchedTerm === '') { return allBooks; }



    return allBooks.filter(function (book) {
      if (book.volumeInfo.authors !== undefined && book.volumeInfo.publisher !== undefined) {
        let authors: any[] = [];
        authors = book.volumeInfo.authors;
        for (let index = 0; index < authors.length; index++) {
          return book.volumeInfo.title.toLowerCase().includes(searchedTerm.toLowerCase()) ||
            book.volumeInfo.categories == searchedTerm ||
            authors[index].toLowerCase().includes(searchedTerm.toLowerCase()) ||
            book.volumeInfo.publisher.toLowerCase().includes(searchedTerm.toLowerCase());

        }
      } else {
          return book.volumeInfo.title.toLowerCase().includes(searchedTerm.toLowerCase()) ||
            book.volumeInfo.categories == searchedTerm;
      }



    });
  }
}

