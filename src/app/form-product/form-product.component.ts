import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product: Product;
  constructor(private productService: ProductService,
              private route: Router) { }

  ngOnInit(): void {
    this.product = new Product()
  }
  save(): void{
    console.log(this.product)
    this.product.like=0;
    //push object
    //send request http
    this.productService.list.push(this.product)
    this.route.navigate(['/home'])
  }

}
