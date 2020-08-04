import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-linea-importados',
  templateUrl: './linea-importados.component.html',
  styleUrls: ['./linea-importados.component.css']
})
export class LineaImportadosComponent implements OnInit {

  productos$: any;
  categoria: any;

  constructor( private ps: ProductosService ) { }

  ngOnInit() {
    this.productos$ = this.ps.getProductosMenudencia();
  }

}
