import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product: Product;
  constructor() { }

  ngOnInit(): void {
    this.product = new Product()
  }
  save(): void{
    console.log(this.product)
    this.product.like=0;
  }

}
