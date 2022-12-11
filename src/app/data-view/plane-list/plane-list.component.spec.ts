import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneListComponent } from './plane-list.component';

describe('PlanesComponent', () => {
  let component: PlaneListComponent;
  let fixture: ComponentFixture<PlaneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
