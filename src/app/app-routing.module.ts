import { PaginaComponent } from './pagina/pagina.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListaraComponent } from './Medicina/listara/listara.component';
import { AddaComponent } from './Medicina/adda/adda.component';
import { EditaComponent } from './Medicina/edita/edita.component';
import { AddbComponent } from './Apointment/addb/addb.component';
import { EditbComponent } from './Apointment/editb/editb.component';
import { ListarbComponent } from './Apointment/listarb/listarb.component';
import { AddcComponent } from './Paciente/addc/addc.component';
import { EditcComponent } from './Paciente/editc/editc.component';
import { ListcComponent } from './Paciente/listc/listc.component';
import { RegistroComponent } from './registro/registro.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'listara', component:ListaraComponent},
  {path:'adda',component:AddaComponent},
  {path:'edita',component:EditaComponent},
  {path:'pagina',component:PaginaComponent},
  {path:'addb',component:AddbComponent},
  {path:'editb',component:EditbComponent},
  {path:'listarb', component:ListarbComponent},
  {path:'addc',component:AddcComponent},
  {path:'editc',component:EditcComponent},
  {path:'listarc', component:ListcComponent},
  {path:'registro',component:RegistroComponent},
  {path:'estadistica',component:EstadisticaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
