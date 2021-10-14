import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

    // Crear controlador del grupo para el formulario.
    Login = new FormGroup({
      nickname : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })

  ngOnInit () {
}


}


