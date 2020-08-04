import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../../services/firebase.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;
  @ViewChild('f') form;

   //SnackBar
   message: string = 'Gracias, tu mensaje ha sido enviado. En breve nos pondremos en contacto.';
   action: string;

  constructor( fb: FormBuilder, private fs: FirebaseService, public snackBar: MatSnackBar ) { 
    this.forma = fb.group ({
      nombreComercial: [ '', Validators.required ],
      ruc: ['', Validators.required],
      personaContacto: ['', Validators.required],
      celular: ['', Validators.required],
      email: [ '', [Validators.required, Validators.email] ],
      mensaje: [ '', [Validators.required, Validators.maxLength(1200)] ],
      fecha: [ firebase.firestore.FieldValue.serverTimestamp() ],
    })
   }

  ngOnInit() {
  }

  enviarMensaje() {
    this.fs.addMensaje(this.forma.value)
    .then(() => {
      console.log(this.forma.value);
      this.form.resetForm({ 
        fecha: firebase.firestore.FieldValue.serverTimestamp()
      });
  
      this.snackBar.open(this.message, this.action, {
        duration: 5000,
      });
    }, error => console.error('error submitting form:', error));
  }

  errorNombreComercial() {
    return this.forma.controls.nombreComercial.hasError('required') ? 'El nombre comercial es necesario.' : '';
  }
  errorRuc() {
    return this.forma.controls.ruc.hasError('required') ? 'El ruc es necesario.' : '';
  }
  errorPersonaContacto() {
    return this.forma.controls.personaContacto.hasError('required') ? 'Este campo es necesario.' : '';
  }
  errorCelular() {
    return this.forma.controls.celular.hasError('required') ? 'El celular es necesario.' : '';
  }
  errorEmail() {
    return this.forma.controls.email.hasError('required') ? 'El email es necesario.' : this.forma.controls.email.hasError('email') ? 'No es un correo válido' : '';
  }
  errorMensaje() {
    return this.forma.controls.mensaje.hasError('required') ? 'El mensaje es necesario.' :
    this.forma.controls.mensaje.hasError('maxlength')? 'Máximo 1200 caracteres': '';
  }


}
