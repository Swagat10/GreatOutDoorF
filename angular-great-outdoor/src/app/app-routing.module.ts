import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product } from './product';
import { Order } from './order';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
