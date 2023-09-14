import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarasCuanticasPage } from './camaras-cuanticas.page';

describe('CamarasCuanticasPage', () => {
  let component: CamarasCuanticasPage;
  let fixture: ComponentFixture<CamarasCuanticasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarasCuanticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
