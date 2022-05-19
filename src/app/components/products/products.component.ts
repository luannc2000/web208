import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/Product';
import { ProductService } from '../../services/product.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList!: IProduct[];
  constructor(private productService: ProductService) {
    this.productList = this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}
// /product -> list
// /product/:id -> detail
