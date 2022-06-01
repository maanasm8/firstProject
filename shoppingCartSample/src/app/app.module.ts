import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //TO ENABLE ROUTER LINKING
    RouterModule.forRoot([
      {path: '', component:ProductListComponent},
      {path: 'products/:productId', component:ProductDetailsComponent}
    ]),
    NoopAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
