import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivenForm } from './modeldriven-form';

describe('ModeldrivenForm', () => {
  let component: ModeldrivenForm;
  let fixture: ComponentFixture<ModeldrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeldrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeldrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
