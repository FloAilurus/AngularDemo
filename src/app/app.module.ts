import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PremierComponent} from './premier/premier.component';
import {DeuxiemeComponent} from './deuxieme/deuxieme.component';
import {FormsModule} from "@angular/forms";
import { ToFarenheitPipe } from './pipes/to-farenheit.pipe';
import { ChronometreComponent } from './chronometre/chronometre.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighLightDirective } from './directives/high-light.directive';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    ToFarenheitPipe,
    ChronometreComponent,
    ExercicesComponent,
    DirectivesComponent,
    HighLightDirective,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
