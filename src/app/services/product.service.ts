import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list: Product[] = [
    { id: 12,
      title: 'T-shirt1',
      quantity: 10,
      like: 2,
      price: 120,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    },
    { id: 12,
      title: 'T-shirt 2',
      quantity: 0,
      like: 3,
      price: 14,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    },
    { id: 34,
      title: 'T-shirt 4',
      quantity: 2,
      like: 123,
      price: 17,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F56%2F49560dfa45732ed844e8e4742afdca248ee60f9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    }
  ];
  constructor() { }
}
