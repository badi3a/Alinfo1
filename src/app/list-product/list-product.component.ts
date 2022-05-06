import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: string;
  public list: Product[];
  public priceMax:number;
  constructor(private productService: ProductService) { }
  ngOnInit():void {
    this.title= 'Eshop';
     this.list = this.productService.list;
  }
  incrementLike(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].like++;
    }
  }
  buyProduct(product: Product): void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--;
    }
  }
  delete(product: Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list.splice(i,1)
    }
  }
}
