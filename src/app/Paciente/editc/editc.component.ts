import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelo/Paciente';
import { Service3Service } from 'src/app/Service/service3.service';

@Component({
  selector: 'app-editc',
  templateUrl: './editc.component.html',
  styleUrls: ['./editc.component.css']
})
export class EditcComponent implements OnInit {

  persona :Paciente=new Paciente();
  constructor(private router:Router,private service:Service3Service) { }

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
  Actualizar(persona:Paciente){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listac"]);
    })
  }

}
