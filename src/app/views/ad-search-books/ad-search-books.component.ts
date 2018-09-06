import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-search-books',
  templateUrl: './ad-search-books.component.html',
  styleUrls: ['./ad-search-books.component.scss']
})
export class AdSearchBooksComponent implements OnInit {

  constructor() { }
  @Input() allBooks: any[] = [];
  @Input() customBookFilter: any = { authors: '', title: '', categories: '', language: ''};

  ngOnInit() {
  }

}
