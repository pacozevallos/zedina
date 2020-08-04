import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  links = [
    { nombre: 'Inicio', url: '/' },
    { nombre: 'Nosotros', url: '/nosotros' },
    { nombre: 'Productos', url: '/productos/lineaRes' },
    { nombre: 'Servicios', url: '/servicios' },
    { nombre: 'Contacto', url: '/contacto' }
  ];

  constructor() { }

}
