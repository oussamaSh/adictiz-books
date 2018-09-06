import { BookItem } from './../../models/BookItem';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ad-popup-details',
  templateUrl: './ad-popup-details.component.html',
  styleUrls: ['./ad-popup-details.component.scss']
})
export class AdPopupDetailsComponent implements OnInit {

  @Input() bookById = new BookItem();
  @Input() allBooks: BookItem[] = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.bookById);
    return this.getBookById;
  }

  getBookById(book: BookItem) {
    this.bookById = this.allBooks.find(x => x.id === book.id);
    return this.bookById;
  }

}
