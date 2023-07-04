import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Modelo/Appointment';
import { Service2Service } from 'src/app/Service/service2.service';

@Component({
  selector: 'app-editb',
  templateUrl: './editb.component.html',
  styleUrls: ['./editb.component.css']
})
export class EditbComponent implements OnInit {

  persona :Appointment=new Appointment();
  constructor(private router:Router,private service:Service2Service) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })

  }
  Actualizar(persona:Appointment){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarb"]);
    })
  }

}
