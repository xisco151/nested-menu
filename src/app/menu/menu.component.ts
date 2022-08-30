import { Component, Input, OnInit } from '@angular/core';
import { MenuProduct, Product } from '../models/product';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() title!: string;
  @Input() tree: MenuProduct[] | undefined;
  @Input() id: number=-1;

  get isRoot() {
    return this.id === -1;
  }

  constructor(public service: MenuService) {
    
    this.tree = [];    
  }

  ngOnInit(): void {}  
 
  
}
