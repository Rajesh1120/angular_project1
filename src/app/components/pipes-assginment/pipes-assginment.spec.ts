import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAssginment } from './pipes-assginment';

describe('PipesAssginment', () => {
  let component: PipesAssginment;
  let fixture: ComponentFixture<PipesAssginment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesAssginment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesAssginment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
