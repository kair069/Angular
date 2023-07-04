import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelo/Paciente';
import { Service3Service } from 'src/app/Service/service3.service';

@Component({
  selector: 'app-addc',
  templateUrl: './addc.component.html',
  styleUrls: ['./addc.component.css']
})
export class AddcComponent implements OnInit {

  persona:Paciente=new Paciente();
  constructor(private router:Router, private service:Service3Service) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listarc"]);
    })
  }

}
