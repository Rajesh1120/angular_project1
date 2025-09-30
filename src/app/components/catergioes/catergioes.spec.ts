import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catergioes } from './catergioes';

describe('Catergioes', () => {
  let component: Catergioes;
  let fixture: ComponentFixture<Catergioes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catergioes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catergioes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
