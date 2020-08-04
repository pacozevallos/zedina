import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from '../../../../node_modules/rxjs/operators';

export interface Producto {
  id?: string;
  imagen?: string;
  imagenTop?: string;
  titulo?: string;
  descripcion?: string;
  recomendaciones?: string[];
  ubicacion?: string;
  categoria?: string;
}

@Component({
  selector: 'app-linea-res',
  templateUrl: './linea-res.component.html',
  styleUrls: ['./linea-res.component.css']
})
export class LineaResComponent implements OnInit {

  productos$: any;
  id: any;

  productos: Producto[];

  constructor( private ps: ProductosService, router: Router ) { 

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });

   }

  ngOnInit() {
    // this.productos$ = this.ps.getProductos().pipe(this.productos$.filter(el => el.categoria === 'lineaRes'));
    this.productos$ = this.ps.getProductosRes();
  }

  // openModalDetalle (id) {
  //   let dialogRef = this.dialog.open(ProductoDetalleComponent, {
  //     height: '400px',
  //     width: '600px',
  //   });
  // }

}
