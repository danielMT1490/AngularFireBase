import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemigoListComponent } from './enemigo-list.component';

describe('EnemigoListComponent', () => {
  let component: EnemigoListComponent;
  let fixture: ComponentFixture<EnemigoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemigoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemigoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
