import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mymodel } from './mymodel';

describe('Mymodel', () => {
  let component: Mymodel;
  let fixture: ComponentFixture<Mymodel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mymodel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mymodel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
