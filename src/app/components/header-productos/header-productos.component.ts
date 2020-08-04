import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-productos',
  templateUrl: './header-productos.component.html',
  styleUrls: ['./header-productos.component.css']
})
export class HeaderProductosComponent implements OnInit {

  lineas: any;

  constructor() { }

  ngOnInit() {
    this.lineas = [
      { image: 'assets/images/iconRes.svg', url:'lineaRes', titulo: 'Res', estado: 'enable' },
      { image: 'assets/images/iconCerdo.svg', url:'lineaCerdo', titulo: 'Cerdo', estado: 'enable' },
      { image: 'assets/images/iconAve.svg', url:'lineaAves', titulo: 'Aves', estado: 'disabled' },
      { image: 'assets/images/iconImportados.svg', url:'lineaMenudencia', titulo: 'Menudencia', estado: 'disabled' }
    ]
  }

}
