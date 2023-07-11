import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../Modelo/Paciente';

@Injectable({
  providedIn: 'root'
})
export class Service3Service {

  constructor(private http:HttpClient) { }

  Url='https://pacientessaludab.azurewebsites.net/api/v1/patients';

  getPersonas(){
    return this.http.get<Paciente[]>(this.Url);
  }
  createPersona(persona:Paciente){
    return this.http.post<Paciente>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Paciente>(this.Url+"/"+id);
  }
  updatePersona(persona:Paciente){
    return this.http.put<Paciente>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Paciente){
    return this.http.delete<Paciente>(this.Url+"/"+persona.id);
  }
}
