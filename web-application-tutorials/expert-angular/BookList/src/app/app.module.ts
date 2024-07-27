import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookDirective } from './book.directive';
import { BookfilterPipe } from './bookfilter.pipe';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', redirectTo: '/new-products', pathMatch: 'full' },
  { path: '**', component: ErrorPageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookDirective,
    BookfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
