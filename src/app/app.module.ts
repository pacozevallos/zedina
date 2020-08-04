import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

// Rutas
import { appRouting } from './app.routes';

// Importar Proyecto Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule  } from 'angularfire2/firestore';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatIconModule
  } from '@angular/material';

// Servicios
import { ProductosService } from './services/productos.service';
import { ProductoResolver } from './services/producto-resolver.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PublicComponent } from './components/public/public.component';
import { LineaResComponent } from './components/linea-res/linea-res.component';
import { LineaCerdoComponent } from './components/linea-cerdo/linea-cerdo.component';
import { LineaAvesComponent } from './components/linea-aves/linea-aves.component';
import { LineaImportadosComponent } from './components/linea-importados/linea-importados.component';
import { HeaderProductosComponent } from './components/header-productos/header-productos.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { BodyLineaResComponent } from './components/body-linea-res/body-linea-res.component';
import { BodyLineaCerdoComponent } from './components/body-linea-cerdo/body-linea-cerdo.component';
import { BodyLineaAvesComponent } from './components/body-linea-aves/body-linea-aves.component';
import { BodyLineaMenudenciaComponent } from './components/body-linea-menudencia/body-linea-menudencia.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactoComponent,
    PublicComponent,
    LineaResComponent,
    LineaCerdoComponent,
    LineaAvesComponent,
    LineaImportadosComponent,
    HeaderProductosComponent,
    ProductoDetalleComponent,
    BodyLineaResComponent,
    BodyLineaCerdoComponent,
    BodyLineaAvesComponent,
    BodyLineaMenudenciaComponent,
    MenuMobileComponent
  ],
  entryComponents: [
    ProductoDetalleComponent,
    MenuMobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
