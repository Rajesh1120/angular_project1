import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Largecomponents } from './largecomponents';

describe('Largecomponents', () => {
  let component: Largecomponents;
  let fixture: ComponentFixture<Largecomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Largecomponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Largecomponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
