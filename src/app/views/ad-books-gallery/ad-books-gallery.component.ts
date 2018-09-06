import { AdPopupDetailsComponent } from './../ad-popup-details/ad-popup-details.component';
import { BookItem } from './../../models/BookItem';
import { BooksData } from './../../models/BooksData';
import { BooksService } from './../../services/books-service/books.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ad-books-gallery',
  templateUrl: './ad-books-gallery.component.html',
  styleUrls: ['./ad-books-gallery.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(600, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AdBooksGalleryComponent implements OnInit {

  constructor(
    private booksService: BooksService,
    private modalService: NgbModal,
    private translate: TranslateService
  ) { }

  public errorMsg;
  BooksData = new BooksData();
  allBooks: BookItem[] = [];
  categories: any[] = [];
  customBookFilter: any = { authors: '', title: '', categories: '', language: '' };
  uniqueCategoriesItems: any[] = [];
  ngOnInit() {
    this.booksService.getAllBooks().subscribe(
      books => {
        console.log(books);
        // this.BooksData.items = books.items;
        this.allBooks = books.items;
        for (let index = 0; index < books.items.length; index++) {
          const item = books.items[index];
          if (item.volumeInfo.categories) {
            this.categories.push(item.volumeInfo.categories[0]);
          }
        }
        this.uniqueCategoriesItems = Array.from(new Set(this.categories));
      },
      error => this.errorMsg = error
    );
  }

  openModalDetails(book: BookItem) {
    const modalRef = this.modalService.open(AdPopupDetailsComponent);
    modalRef.componentInstance.bookById = book;
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
