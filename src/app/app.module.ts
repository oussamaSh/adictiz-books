import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdSearchBooksComponent } from './views/ad-search-books/ad-search-books.component';
import { AdBooksGalleryComponent } from './views/ad-books-gallery/ad-books-gallery.component';
import { AdPopupDetailsComponent } from './views/ad-popup-details/ad-popup-details.component';
import { BooksMainComponent } from './views/books-main/books-main.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BooksPipe } from './pipes/books.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguagePipe } from './pipes/language.pipe';
import { UniquePipe } from './pipes/unique.pipe';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    AdSearchBooksComponent,
    AdBooksGalleryComponent,
    AdPopupDetailsComponent,
    BooksMainComponent,
    FooterComponent,
    HeaderComponent,
    BooksPipe,
    LanguagePipe,
    UniquePipe
  ],
  entryComponents: [AdPopupDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
