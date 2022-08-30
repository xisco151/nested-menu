import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MenuService } from '../services/menu.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MenuService,
          useValue: {
            getProducts: () => ({ pipe: () => ({ subscribe: () => ({}) }) }),
          },
        },
      ],
    })
      .overrideComponent(HeaderComponent, {})
      .compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnDestroy()', async () => {
    component.unsuscribe$ = component.unsuscribe$ || {};
    spyOn(component.unsuscribe$, 'next');
    spyOn(component.unsuscribe$, 'complete');
    component.ngOnDestroy();
    expect(component.unsuscribe$.next).toHaveBeenCalled();
    expect(component.unsuscribe$.complete).toHaveBeenCalled();
  });
});
