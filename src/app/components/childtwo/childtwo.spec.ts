import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childtwo } from './childtwo';

describe('Childtwo', () => {
  let component: Childtwo;
  let fixture: ComponentFixture<Childtwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childtwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childtwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
