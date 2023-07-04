import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicina } from 'src/app/Modelo/Medicina';
import { Service1Service } from 'src/app/Service/service1.service';

@Component({
  selector: 'app-listara',
  templateUrl: './listara.component.html',
  styleUrls: ['./listara.component.css']
})
export class ListaraComponent implements OnInit {

  personas: Medicina[];
  constructor(private service: Service1Service, private router: Router) { }

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      });
  }
  Editar(persona:Medicina):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edita"]);
  }

  Delete(persona:Medicina){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado...");
    })
  }

}
