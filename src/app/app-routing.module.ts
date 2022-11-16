import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaQueriesComponent } from './components/lista-queries/lista-queries.component';

const routes: Routes = [
  {path: '', component: ListaQueriesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
