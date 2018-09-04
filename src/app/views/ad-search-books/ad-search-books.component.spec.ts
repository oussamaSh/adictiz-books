import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSearchBooksComponent } from './ad-search-books.component';

describe('AdSearchBooksComponent', () => {
  let component: AdSearchBooksComponent;
  let fixture: ComponentFixture<AdSearchBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdSearchBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
