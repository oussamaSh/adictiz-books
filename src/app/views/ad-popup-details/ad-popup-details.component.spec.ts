import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPopupDetailsComponent } from './ad-popup-details.component';

describe('AdPopupDetailsComponent', () => {
  let component: AdPopupDetailsComponent;
  let fixture: ComponentFixture<AdPopupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPopupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPopupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
