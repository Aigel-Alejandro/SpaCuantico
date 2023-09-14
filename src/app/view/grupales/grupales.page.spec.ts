import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrupalesPage } from './grupales.page';

describe('GrupalesPage', () => {
  let component: GrupalesPage;
  let fixture: ComponentFixture<GrupalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrupalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
