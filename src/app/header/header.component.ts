import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuProduct, Product } from '../models/product';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  data: MenuProduct[] = [];
  unsuscribe$ = new Subject();
  constructor(private service: MenuService) {
    service
      .getProducts()
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe((products: Product[]) => {
        this.data = this.service.mapProducts(products);
      },
      error=> console.error(error));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }
}
