import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCollectionComponent } from './custom-collection.component';

describe('CustomCollectionComponent', () => {
  let component: CustomCollectionComponent;
  let fixture: ComponentFixture<CustomCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
