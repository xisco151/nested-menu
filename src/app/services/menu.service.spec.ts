import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MenuService],
    }).compileComponents();

    service = TestBed.get(MenuService);
  });

  it('should run #getProducts()', async () => {
    service.http = service.http || {};
    spyOn(service.http, 'get');
    service.getProducts();
    expect(service.http.get).toHaveBeenCalled();
  });

  it('should run #mapProducts()', async () => {
    service.mapProducts([
      {
        parentId: null,
        name: 'name',
        id: 1,
      },
    ]);
  });
});
