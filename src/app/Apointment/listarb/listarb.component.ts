import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Modelo/Appointment';
import { Service2Service } from 'src/app/Service/service2.service';

@Component({
  selector: 'app-listarb',
  templateUrl: './listarb.component.html',
  styleUrls: ['./listarb.component.css']
})
export class ListarbComponent implements OnInit {

  personas: Appointment[];
  constructor(private service: Service2Service, private router: Router) { }

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      });
  }
  Editar(persona:Appointment):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["editb"]);
  }

  Delete(persona:Appointment){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado...");
    })
  }

}
