import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links;

  // links = [
  //   { nombre: 'Inicio', url: '/' },
  //   { nombre: 'Nosotros', url: '/nosotros' },
  //   { nombre: 'Productos', url: '/productos/lineaRes' },
  //   { nombre: 'Servicios', url: '/servicios' },
  //   { nombre: 'Contacto', url: '/contacto' },
  // ];

  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  constructor(
    private dialog: MatDialog,
    private ds: DataService
  ) { }

  ngOnInit() {
    this.links = this.ds.links;
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  openModalMenuMobile() {
    const dialogRef = this.dialog.open(MenuMobileComponent, {
      panelClass: 'modalFullScreen',
    });
    dialogRef.afterClosed().subscribe();
  }

}
