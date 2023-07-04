import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../Modelo/Appointment';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor(private http:HttpClient) { }

  //Url='http://localhost:8899/api/v3/appointments';
  Url='https://javamedicineazure.azurewebsites.net/api/v3/appointments';

  getPersonas(){
    return this.http.get<Appointment[]>(this.Url);
  }
  createPersona(persona:Appointment){
    return this.http.post<Appointment>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Appointment>(this.Url+"/"+id);
  }
  updatePersona(persona:Appointment){
    return this.http.put<Appointment>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Appointment){
    return this.http.delete<Appointment>(this.Url+"/"+persona.id);
  }
}
