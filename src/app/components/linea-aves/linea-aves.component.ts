import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-linea-aves',
  templateUrl: './linea-aves.component.html',
  styleUrls: ['./linea-aves.component.css']
})
export class LineaAvesComponent implements OnInit {

  productos$: any;
  categoria: any;

  constructor( private ps: ProductosService ) { }

  ngOnInit() {
    this.productos$ = this.ps.getProductosAves();
  }

}
