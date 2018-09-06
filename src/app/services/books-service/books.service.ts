import { BooksData } from './../../models/BooksData';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as Globals from '../globals';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http: HttpClient) { }

  getAllBooks(): Observable<BooksData> {
    return this.http.get<BooksData>(Globals.URL).pipe();
  }

}
