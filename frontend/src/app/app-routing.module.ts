import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { PacienteComponent } from './pages/paciente/paciente.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent },
  { path: 'paciente/:id', component: PacienteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
