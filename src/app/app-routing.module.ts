import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PremierComponent} from "./premier/premier.component";
import {DeuxiemeComponent} from "./deuxieme/deuxieme.component";
import {ExercicesComponent} from "./exercices/exercices.component";
import {DirectivesComponent} from "./directives/directives.component";
import {StockComponent} from "./stock/stock.component";

const routes: Routes = [
  {
    path: 'premier',
    component: PremierComponent
  },
  {
    path: 'deuxieme',
    component: DeuxiemeComponent
  },
  {
    path: 'exercices',
    component: ExercicesComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'stock',
    component: StockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
