import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContasComponent } from './pages/contas/contas.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';

const routes: Routes = [
  {path: 'contas', component: ContasComponent},
  {path: 'colaboradores', component: ColaboradoresComponent},
  {path: 'empresas', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
