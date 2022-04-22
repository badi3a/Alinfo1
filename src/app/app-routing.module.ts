import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";
import {FormProductComponent} from "./form-product/form-product.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:'home' , component:ListProductComponent },
  {path:'newproduct', component: FormProductComponent},
  {path:'**',component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
