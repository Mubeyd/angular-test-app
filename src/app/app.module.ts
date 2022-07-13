import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
