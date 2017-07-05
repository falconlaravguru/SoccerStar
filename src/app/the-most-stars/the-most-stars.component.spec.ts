import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMostStarsComponent } from './the-most-stars.component';

describe('TheMostStarsComponent', () => {
  let component: TheMostStarsComponent;
  let fixture: ComponentFixture<TheMostStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMostStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMostStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
