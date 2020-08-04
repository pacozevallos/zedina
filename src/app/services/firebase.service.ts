import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private afs: AngularFirestore ) { }


  addMensaje(mensaje) {
    return this.afs.collection('mensajes').add(mensaje);
  }





}
