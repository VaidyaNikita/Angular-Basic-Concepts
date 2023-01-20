import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourceComponent } from './search-cource.component';

describe('SearchCourceComponent', () => {
  let component: SearchCourceComponent;
  let fixture: ComponentFixture<SearchCourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
