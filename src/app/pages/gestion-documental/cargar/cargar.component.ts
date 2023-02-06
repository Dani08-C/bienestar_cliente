import { Component, OnInit } from '@angular/core';
import { Documento } from '../../../@core/data/models/documento/documento';

@Component({
  selector: 'ngx-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.scss']
})
export class CargarComponent implements OnInit {

  // Estos datos se pueden traer de BD, para poder agregar mas
  tiposDocumento: String [] = [
    "Acta",
    "Resolución",
    "Comunicado",
    "Contrato"
  ];
  documento: Documento = new Documento;
  id: String = "123";
  constructor() { }

  ngOnInit() {
  }
  cargarFormulario(){
    console.log(this.documento.Id);
  }

}
