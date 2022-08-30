import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuProduct, Product } from '../models/product';

@Injectable()
export class MenuService {
  constructor(public http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('assets/data/options.json');
  }

  mapProducts(response: Product[]): MenuProduct[] {
    let tree: MenuProduct[] = [];
    response.forEach((next: Product) => {
      let product: MenuProduct = next;
      if (!next.parentId) {
        tree.push(product);
      }
      const children = response.filter(
        (child: Product) => child.parentId === next.id
      );
      if (children.length > 0) {
        product.children = children;
      }
    }, []);
    return tree;
  }
}
