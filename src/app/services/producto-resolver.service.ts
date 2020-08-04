import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Producto, ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoResolver implements Resolve<Producto> {

  constructor(private ps: ProductosService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Producto> {
    let id = route.paramMap.get('id');

    return this.ps.getProducto(id).pipe(
      take(1),
      map(producto => {
        if (producto) {
          return producto;
        } else { // id not found
          console.error('id not found');
          this.router.navigate(['/productos']);
          return null;
        }
      })
    );
  }

}
