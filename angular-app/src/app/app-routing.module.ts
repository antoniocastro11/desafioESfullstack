import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { InstListarModule } from './instituicao/inst-crud/inst-listar.module';

const routes: Routes = [
  {path:"", component: InicialComponent},
  {
    path: "instituicao",
    loadChildren: () => import('./instituicao/inst-crud/inst-listar.module').then(modulo => modulo.InstListarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
