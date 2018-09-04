import { BooksService } from './../../services/books-service/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-books-gallery',
  templateUrl: './ad-books-gallery.component.html',
  styleUrls: ['./ad-books-gallery.component.scss']
})
export class AdBooksGalleryComponent implements OnInit {

  constructor(
    private booksService: BooksService
  ) { }

  public errorMsg;
  allBooks: any[] = [];
  customBookFilter: any = { language: '', title: ''};

  ngOnInit() {
    this.booksService.getAllBooks().subscribe(
      books => {
        console.log(books);
       this.allBooks = books;
      },
      error => this.errorMsg = error
    );
  }

}
