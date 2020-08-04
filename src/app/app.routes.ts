import { RouterModule, Routes } from '@angular/router';

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
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ProductoResolver } from './services/producto-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: InicioComponent },
      {
        path: 'productos',
        component: ProductosComponent,
        children: [
          { path: 'lineaRes', component: LineaResComponent },
          {
            path: 'lineaRes/:id',
            component: ProductoDetalleComponent,
            resolve: {
              producto: ProductoResolver,
            },
          },
          { path: 'lineaCerdo', component: LineaCerdoComponent },
          {
            path: 'lineaCerdo/:id',
            component: ProductoDetalleComponent,
            resolve: {
              producto: ProductoResolver,
            },
          },

          { path: 'lineaAves', component: LineaAvesComponent },
          {
            path: 'lineaAves/:id',
            component: ProductoDetalleComponent,
            resolve: {
              producto: ProductoResolver,
            },
          },
          { path: 'lineaMenudencia', component: LineaImportadosComponent },
          {
            path: 'lineaMenudencia/:id',
            component: ProductoDetalleComponent,
            resolve: {
              producto: ProductoResolver,
            },
          },
        ],
      },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'contacto', component: ContactoComponent },
    ],
  },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);
