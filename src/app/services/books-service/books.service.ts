import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as Globals from '../globals';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http: HttpClient) { }

  getAllBooks(): Observable<Object[]> {
    return this.http.get<Object[]>(Globals.URL).pipe();
  }

}
