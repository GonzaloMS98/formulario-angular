import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  info = {
    nombre: 'Juan',
    apellido: 'Perez',
    correo: 'juanperez@hotmail.com'
  };
  guardar = (formulario) => {
    console.log(formulario.form.value);
  }

  ngOnInit(): void {
  }

}
