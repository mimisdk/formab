import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(public alercontrol:AlertController) { }

  ngOnInit() {
  }

  FormularioContrasena = new FormGroup ({
    clave1: new FormControl('', Validators.required),
    clave2: new FormControl('', Validators.required)
  });


}

