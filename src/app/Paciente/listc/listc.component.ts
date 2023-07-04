import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelo/Paciente';
import { Service3Service } from 'src/app/Service/service3.service';

@Component({
  selector: 'app-listc',
  templateUrl: './listc.component.html',
  styleUrls: ['./listc.component.css']
})
export class ListcComponent implements OnInit {

  personas: Paciente[];
  constructor(private service: Service3Service, private router: Router) { }

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      });
  }
  Editar(persona:Paciente):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["editc"]);
  }

  Delete(persona:Paciente){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado...");
    })
  }

}
