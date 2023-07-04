import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicina } from 'src/app/Modelo/Medicina';
import { Service1Service } from 'src/app/Service/service1.service';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {

  persona :Medicina=new Medicina();
  constructor(private router:Router,private service:Service1Service) { }

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
  Actualizar(persona:Medicina){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
