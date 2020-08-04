import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  id: string;
  imagen: string;
  imagenTop: string;
  titulo: string;
  descripcion: string;
  recomendaciones: string[];
  ubicacion: string;
  categoria: string;


  constructor( private activatedRoute: ActivatedRoute ) {  }

  ngOnInit() {
    const producto = this.activatedRoute.snapshot.data.producto;
  
    this.id = producto.id;
    this.imagen = producto.imagen;
    this.imagenTop = producto.imagenTop;
    this.titulo = producto.titulo;
    this.descripcion = producto.descripcion;
    this.recomendaciones = producto.recomendaciones;
    this.ubicacion = producto.ubicacion;
    this.categoria = producto.categoria;

  }

}
