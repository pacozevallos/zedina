import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productosTop: any;

  constructor( private ps: ProductosService, ) { }

  ngOnInit() {
    this.getProductosTop();
  }

  getProductosTop() {
    this.productosTop = [
      {
        id: 'bolaLomo',
        categoria: 'lineaRes',
        titulo: 'Bola de Lomo',
        descripcion: 'Corte versátil, suave y tierno, se caracteriza por tener un poco de tejido conectivo, se sirve ligeramente en filetes.',
        imagen: 'assets/images/productos/res/bolaLomoTop.png',
      },
      {
        id: 'sancochado',
        categoria: 'lineaRes',
        titulo: 'Sancochado',
        descripcion: 'Es un corte que tiene tejido conectivo y grasa.',
        imagen: 'assets/images/productos/res/sancochadoTop.png',
      },
      {
        id: 'bondiolaSinPielSinHueso',
        categoria: 'lineaCerdo',
        titulo: 'Bondiola sin piel sin hueso',
        descripcion: 'Es el pescuezo deshuesado. Gracias a la grasa que posee entre sus músculos, es un corte muy sabroso, tierno y jugoso.',
        imagen: 'assets/images/productos/cerdo/bondiolaTop.png',
      },
      {
        id: 'chuleta',
        categoria: 'lineaCerdo',
        titulo: 'Chuleta',
        descripcion: 'Pieza obtenida del dorso con piel y con hueso. Se moldea y se congela para su posterior porcionado.',
        imagen: 'assets/images/productos/cerdo/chuletaTop.png',
      },
    ]
  }

}
