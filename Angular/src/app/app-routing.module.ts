import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { InfoComponent } from './info/info.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'nav', component:NavComponent},
  {path:'info', component:InfoComponent},
  {path:"details/:id", component: DetallesComponent},
  {path:"search/:id", component: SearchComponent },
  {path:"",component:InfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
