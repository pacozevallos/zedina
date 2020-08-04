import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-linea-cerdo',
  templateUrl: './linea-cerdo.component.html',
  styleUrls: ['./linea-cerdo.component.css']
})
export class LineaCerdoComponent implements OnInit {

  productos$: any;
  categoria: any;

  constructor( private ps: ProductosService, router: Router  ) { 

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
    this.productos$ = this.ps.getProductosCerdo();
    // this.productos$ = this.ps.getProductos().pipe(filter(el => el.categoria == 'res'));
  }

}
