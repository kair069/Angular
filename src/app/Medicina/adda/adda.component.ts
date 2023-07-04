import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicina } from 'src/app/Modelo/Medicina';
import { Service1Service } from 'src/app/Service/service1.service';

@Component({
  selector: 'app-adda',
  templateUrl: './adda.component.html',
  styleUrls: ['./adda.component.css']
})
export class AddaComponent implements OnInit {

  persona:Medicina=new Medicina();
  constructor(private router:Router, private service:Service1Service) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listara"]);
    })
  }

}
