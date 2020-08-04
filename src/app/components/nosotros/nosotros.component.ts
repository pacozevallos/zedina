import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  valores: any;

  constructor() { }

  ngOnInit() {
    this.valores = [
      {
        image: 'assets/images/iconHonestidad.svg',
        titulo: 'Honestidad',
        descripcion: 'Administramos los recursos son sobriedad y eficiencia.',
      },
      {
        image: 'assets/images/iconLealtad.svg',
        titulo: 'Lealtad',
        descripcion: 'Privilegiamos la honestidad y compromiso con la compañía.'
      },
      {
        image: 'assets/images/iconPerseverancia.svg',
        titulo: 'Perseverancia',
        descripcion: ' Sentimos pasión por el trabajo en equipo.'
      }
    ];
    // this.valores = [
    //   {
    //     image:'assets/images/iconHonestidad.svg',
    //     titulo:'Honestidad',
    //     descripcion: 'Cualidad de la persona o cosa que es honesta.',
    //     color: '#f5f5f5'
    //   },
    //   {
    //     image:'assets/images/iconLealtad.svg',
    //     titulo:'Lealtad',
    //     descripcion: 'Sentimiento de respeto y fidelidad a los propios principios morales.'
    //   },
    //   {
    //     image:'assets/images/iconPerseverancia.svg',
    //     titulo:'Perseverancia',
    //     descripcion: 'Firmeza y constancia en la manera de ser o de obrar.'
    //   },
    //   {
    //     image:'assets/images/iconRespeto.svg',
    //     titulo:'Respeto',
    //     descripcion: 'Consideración de que algo es digno y debe ser tolerado.'
    //   },
    //   {
    //     image:'assets/images/iconResponsabilidad.svg',
    //     titulo:'Responsabilidad',
    //     descripcion: 'Obligación de la que una persona debe responder.'
    //   },
    //   {
    //     image:'assets/images/iconTrabajoEquipo.svg',
    //     titulo:'Trabajo en equipo',
    //     descripcion: 'La unión de dos o más personas organizadas de una forma determinada.'
    //   }
    // ]
  }

}
