import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languagePipe'
})
export class LanguagePipe implements PipeTransform {

  transform(allBooks: any, searchedTerm: any): any {
    if (searchedTerm === undefined || searchedTerm === '') { return allBooks; }
      return allBooks.filter(function (book) {
          return book.volumeInfo.language == searchedTerm;
      });
  }

}
