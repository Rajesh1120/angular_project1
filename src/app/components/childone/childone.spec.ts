import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childone } from './childone';

describe('Childone', () => {
  let component: Childone;
  let fixture: ComponentFixture<Childone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
