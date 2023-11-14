import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { clientiComponent } from './clienti/clienti.component'
import { SetariComponent } from './setari/setari.component';


const routes: Routes = [
  {path: '', redirectTo: 'cleinti', pathMatch: 'full'},
  {path: 'clienti', component: clientiComponent},
  {path: 'setari', component: SetariComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
