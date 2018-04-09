import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CollectionComponent } from './components/collection/collection.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { LeaguefilterPipe } from './leaugefilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CollectionComponent,
    FiltersComponent,
    FilterPipe,
    LeaguefilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
