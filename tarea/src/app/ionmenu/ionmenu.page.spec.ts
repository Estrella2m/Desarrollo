import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonmenuPage } from './ionmenu.page';

describe('IonmenuPage', () => {
  let component: IonmenuPage;
  let fixture: ComponentFixture<IonmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
