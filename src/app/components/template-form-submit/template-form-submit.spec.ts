import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormSubmit } from './template-form-submit';

describe('TemplateFormSubmit', () => {
  let component: TemplateFormSubmit;
  let fixture: ComponentFixture<TemplateFormSubmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormSubmit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormSubmit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
