import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

const routes: Routes = [
  {path:'nav', component:NavComponent},
  {path:'tarjetas', component:TarjetasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
