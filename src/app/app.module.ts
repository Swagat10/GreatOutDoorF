import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';

import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { UpdateRetailerComponent } from './update-retailer/update-retailer.component';
import { RemoveRetailerComponent } from './remove-retailer/remove-retailer.component';
import { FindRetailerComponent } from './find-retailer/find-retailer.component';
import { RetailerListComponent } from './retailer-list/retailer-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    AddRetailerComponent,
    UpdateRetailerComponent,
    RemoveRetailerComponent,
    FindRetailerComponent,
    RetailerListComponent,
    routingcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
