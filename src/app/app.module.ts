import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { FoodButtonComponent } from './food-button/food-button.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalCardComponent,
    SearchBarComponent,
    TabsComponent,
    FoodButtonComponent,
    AppBarComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
