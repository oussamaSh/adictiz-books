import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBooksGalleryComponent } from './ad-books-gallery.component';

describe('AdBooksGalleryComponent', () => {
  let component: AdBooksGalleryComponent;
  let fixture: ComponentFixture<AdBooksGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBooksGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBooksGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
