import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { AddaComponent } from './Medicina/adda/adda.component';
import { EditaComponent } from './Medicina/edita/edita.component';
import { ListaraComponent } from './Medicina/listara/listara.component';
import { Service1Service } from './Service/service1.service';
import { PaginaComponent } from './pagina/pagina.component';
import { ListarbComponent } from './Apointment/listarb/listarb.component';
import { AddbComponent } from './Apointment/addb/addb.component';
import { EditbComponent } from './Apointment/editb/editb.component';
import { Service2Service } from './Service/service2.service';
import { AddcComponent } from './Paciente/addc/addc.component';
import { EditcComponent } from './Paciente/editc/editc.component';
import { ListcComponent } from './Paciente/listc/listc.component';
import { Service3Service } from './Service/service3.service';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AddaComponent,
    EditaComponent,
    ListaraComponent,
    PaginaComponent,
    ListarbComponent,
    AddbComponent,
    EditbComponent,
    AddcComponent,
    EditcComponent,
    ListcComponent,
    EstadisticaComponent,
    RegistroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService,Service1Service,Service2Service,Service3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
