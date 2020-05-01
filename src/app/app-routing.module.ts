import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { UpdateRetailerComponent } from './update-retailer/update-retailer.component';
import { RemoveRetailerComponent } from './remove-retailer/remove-retailer.component';
import { FindRetailerComponent } from './find-retailer/find-retailer.component';
import { RetailerListComponent } from './retailer-list/retailer-list.component';


const routes: Routes = [
  {path:'add-retailer',component:AddRetailerComponent},
  {path:'update-retailer',component:UpdateRetailerComponent},
  {path:'remove-retailer',component:RemoveRetailerComponent},
  {path:'find-retailer',component:FindRetailerComponent},
  {path:'retailer-list',component:RetailerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponet = [AddRetailerComponent,UpdateRetailerComponent,RemoveRetailerComponent,FindRetailerComponent,RetailerListComponent];