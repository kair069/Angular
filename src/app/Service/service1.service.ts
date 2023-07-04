import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicina } from '../Modelo/Medicina';

@Injectable()
export class Service1Service {

  constructor(private http:HttpClient) { }

  //Url='http://localhost:8090/api/v2/medicines';
  Url='https://javaaaaas.azurewebsites.net/api/v2/medicines';

  getPersonas(){
    return this.http.get<Medicina[]>(this.Url);
  }
  createPersona(persona:Medicina){
    return this.http.post<Medicina>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Medicina>(this.Url+"/"+id);
  }
  updatePersona(persona:Medicina){
    return this.http.put<Medicina>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Medicina){
    return this.http.delete<Medicina>(this.Url+"/"+persona.id);
  }
}
