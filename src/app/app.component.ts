import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }
  Listara(){
    this.router.navigate(["listara"]);
  }
  Nuevoa(){
    this.router.navigate(["adda"]);
  }
  pagina(){
    this.router.navigate(["pagina"]);
  }
  Listarb(){
    this.router.navigate(["listarb"]);
  }

  Nuevob(){
    this.router.navigate(["addb"]);
  }

  Listarc(){
    this.router.navigate(["listarc"]);
  }

  Nuevoc(){
    this.router.navigate(["addc"]);
  }
  estadistica(){
    this.router.navigate(["estadistica"]);
  }

  registro(){
    this.router.navigate(["registro"]);
  }

}
