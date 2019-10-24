import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemigoDetailComponent } from './enemigo-detail.component';

describe('EnemigoDetailComponent', () => {
  let component: EnemigoDetailComponent;
  let fixture: ComponentFixture<EnemigoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemigoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemigoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
