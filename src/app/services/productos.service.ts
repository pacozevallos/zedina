import { Injectable } from '@angular/core';
import { of } from 'rxjs';


export interface Producto {
  id?: string;
  imagen?: string;
  imagenTop?: string;
  titulo?: string;
  descripcion?: string;
  recomendaciones?: Array<any>;
  ubicacion?: string;
  categoria?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    productos: Producto[] = [
      {
        id: 'lomoFino',
        categoria: 'lineaRes',
        titulo: 'Lomo fino',
        imagen: 'assets/images/productos/res/lomoFino.jpg',
        descripcion: 'Es la pieza más fina de la res, de textura tierna y de excelente sabor a pesar de tener poca grasa, es la parte más suave de la res.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' }
        ],
        ubicacion: 'assets/images/productos/res/lomoFino.svg',
      },
      {
        id: 'colitaCuadril',
        categoria: 'lineaRes',
        titulo: 'Colita de cuadril',
        imagen: 'assets/images/productos/res/colitaCuadril.jpg',
        descripcion: 'Es un corte triangular y ligeramente marmoleado, que procede de la cadera.',
        // recomendaciones: ['Guisos', 'Plancha', 'Parrilla'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' }
        ],
        ubicacion: 'assets/images/productos/res/colitaCuadril.svg',
      },
      {
        id: 'asadoCuadrado',
        categoria: 'lineaRes',
        titulo: 'Asado cuadrado',
        imagen: 'assets/images/productos/res/asadoCuadrado.jpg',
        descripcion: 'Corte fibroso, de sabor agradable, con presencia de nervio en la parte central.',
        // recomendaciones: ['Guisos', 'Freir', 'Horno'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Horno', icon: 'assets/images/iconsRecomendaciones/iconHorno.svg' }
        ],
        ubicacion: 'assets/images/productos/res/asadoCuadrado.svg',
      },
      {
        id: 'guisoAguja',
        categoria: 'lineaRes',
        titulo: 'Guiso Aguja',
        imagen: 'assets/images/productos/res/guisoAguja.jpg',
        descripcion: 'Es un corte sin hueso, ubicado en la parte superior de la res.',
        // recomendaciones: ['Guisos', 'Estofado'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Estofados', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' }
        ],
        ubicacion: 'assets/images/productos/res/guisoAguja.svg',
      },
      {
        id: 'asadoRuso',
        categoria: 'lineaRes',
        titulo: 'Asado Ruso',
        imagen: 'assets/images/productos/res/asadoRuso.jpg',
        descripcion: 'Es un corte ubicado en la parte del pecho.',
        // recomendaciones: ['Guisos'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
        ],
        ubicacion: 'assets/images/productos/res/asadoRuso.svg',
      },
      {
        id: 'garron',
        categoria: 'lineaRes',
        titulo: 'Garrón',
        imagen: 'assets/images/productos/res/garron.jpg',
        descripcion: 'Es un corte que posee poca grasa externa pero mucho tejido conectivo. El corte con hueso se llama osobuco.',
        // recomendaciones: ['Guisos', 'Estofado'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Estofados', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' }
        ],
        ubicacion: 'assets/images/productos/res/garron.svg',
      },
      {
        id: 'tortuga',
        categoria: 'lineaRes',
        titulo: 'Tortuga',
        imagen: 'assets/images/productos/res/tortuga.jpg',
        descripcion: 'Es un corte de carne dura, posee poca grasa externa y tiene tejido conectivo.',
        // recomendaciones: ['Guisos'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' }
        ],
        ubicacion: 'assets/images/productos/res/tortuga.svg',
      },
      {
        id: 'chingolo',
        categoria: 'lineaRes',
        titulo: 'Chingolo',
        imagen: 'assets/images/productos/res/chingolo.jpg',
        descripcion: 'Es un guiso especial que posee una capa de tejido conectivo en la parte superior.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' }
        ],
        ubicacion: 'assets/images/productos/res/chingolo.svg',
      },
      {
        id: 'bifeAncho',
        categoria: 'lineaRes',
        titulo: 'Bife Ancho',
        imagen: 'assets/images/productos/res/bifeAncho.jpg',
        descripcion: 'Es un corte fino que presenta una capa de grasa, tiene un tejido conectivo interno en la parte superior.',
        // recomendaciones: ['Freir', 'Plancha', 'Parillas'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' }
        ],
        ubicacion: 'assets/images/productos/res/bifeAncho.svg',
      },
      {
        id: 'cadera',
        categoria: 'lineaRes',
        titulo: 'Cadera',
        imagen: 'assets/images/productos/res/cadera.jpg',
        descripcion: 'Corte tierno y suave, está compuesta por el cuadril y la colita.',
        // recomendaciones: ['Freir'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' }
        ],
        ubicacion: 'assets/images/productos/res/cadera.svg',
      },
      {
        id: 'cuadril',
        categoria: 'lineaRes',
        titulo: 'Cuadril',
        imagen: 'assets/images/productos/res/cuadril.jpg',
        descripcion: 'Corte tierno y suave, está compuesta por el cuadril y la colita.',
        // recomendaciones: ['Freir', 'Parrillas'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' }
        ],
        ubicacion: 'assets/images/productos/res/cuadril.svg',
      },
      {
        id: 'churrascoLargo',
        categoria: 'lineaRes',
        titulo: 'Churrasco largo',
        imagen: 'assets/images/productos/res/churrascoLargo.jpg',
        descripcion: 'Es un corte fino de grandes dimensiones, se moldea y se congela para su posterior porcionado.',
        // recomendaciones: ['Freir', 'Plancha', 'Parrillas'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' }
        ],
        ubicacion: 'assets/images/productos/res/churrascoLargo.svg',
      },
      {
        id: 'tapaNalga',
        categoria: 'lineaRes',
        titulo: 'Tapa Nalga',
        imagen: 'assets/images/productos/res/tapaNalga.jpg',
        descripcion: 'Es un corte versátil, suave y tierno.',
        // recomendaciones: ['Freir'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' }
        ],
        ubicacion: 'assets/images/productos/res/tapa.svg',
      },
      {
        id: 'bolaLomo',
        categoria: 'lineaRes',
        titulo: 'Bola de Lomo',
        imagen: 'assets/images/productos/res/bolaLomo.jpg',
        imagenTop: 'assets/images/productos/res/bolaLomo.png',
        descripcion: 'Corte versátil, suave y tierno, se caracteriza por tener un poco de tejido conectivo, se sirve ligeramente en filetes.',
        // recomendaciones: ['Freir'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' }
        ],
        ubicacion: 'assets/images/productos/res/bolaLomo.svg',
      },
      {
        id: 'paleta',
        categoria: 'lineaRes',
        titulo: 'Paleta',
        imagen: 'assets/images/productos/res/paleta.jpg',
        descripcion: 'Es un corte suave que tiene un nervio en la parte interna del músculo.',
        // recomendaciones: ['Freir', 'Plancha', 'Parrillas'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' }
        ],
        ubicacion: 'assets/images/productos/res/paleta.svg',
      },
      {
        id: 'malaya',
        categoria: 'lineaRes',
        titulo: 'Malaya',
        imagen: 'assets/images/productos/res/malaya.jpg',
        descripcion: 'Es un corte de res fibroso y jugosa.',
        // recomendaciones: ['Freir'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' }
        ],
        ubicacion: 'assets/images/productos/res/malaya.svg',
      },
      {
        id: 'molida',
        categoria: 'lineaRes',
        titulo: 'Molida',
        imagen: 'assets/images/productos/res/molida.jpg',
        descripcion: 'Son trozos de carne de res molida.',
        // recomendaciones: ['Freir', 'Plancha', 'Estofado'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Estofados', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' }
        ],
        // ubicacion: 'assets/images/productos/res/molida.svg',
      },
      {
        id: 'picana',
        categoria: 'lineaRes',
        titulo: 'Picaña',
        imagen: 'assets/images/productos/res/picana.jpg',
        descripcion: 'Pieza de carne sin hueso de la parte baja, externa y transversalmente del cuarto trasero de la res.',
        // recomendaciones: ['Parrillas'],
        recomendaciones: [
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' }
        ],
        ubicacion: 'assets/images/productos/res/picana.svg',
      },
      {
        id: 'asadoTira',
        categoria: 'lineaRes',
        titulo: 'Asado de Tira',
        imagen: 'assets/images/productos/res/asadoTira.jpg',
        descripcion: 'Corte de res que está compuesto por las primeras 5 costillas de la res. Está cortado en tiras de 3 a 5 cm.',
        // recomendaciones: ['Planchas', 'Parrillas', 'Estofado'],
        recomendaciones: [
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
          { nombre: 'Estofados', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' },
        ],
        ubicacion: 'assets/images/productos/res/asadoTira.svg',
      },
      {
        id: 'pechoSinHueso',
        categoria: 'lineaRes',
        titulo: 'Pecho sin hueso',
        imagen: 'assets/images/productos/res/pechoSinHueso.jpg',
        descripcion: 'Proviene de la parte superior de la costilla. La carne rodea al hueso y se encuentra recubierta de una ligera membrana.',
        // recomendaciones: ['Estofado'],
        recomendaciones: [
          { nombre: 'Estofados', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' }
        ],
        ubicacion: 'assets/images/productos/res/pecho.svg',
      },
      {
        id: 'sancochado',
        categoria: 'lineaRes',
        titulo: 'Sancochado',
        imagen: 'assets/images/productos/res/sancochado.jpg',
        descripcion: 'Es un corte que tiene tejido conectivo y grasa.',
        // recomendaciones: [ 'Estofado'],
        recomendaciones: [
          { nombre: 'Estofados', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' }
        ],
        ubicacion: 'assets/images/productos/res/sancochado.svg',
      },
      {
        id: 'huesosRes',
        categoria: 'lineaRes',
        titulo: 'Huesos de Res',
        imagen: 'assets/images/productos/res/huesosRes.jpg',
        descripcion: 'Es el tejido óseo que conforma el esqueleto del animal.',
        // recomendaciones: ['Estofado'],
        recomendaciones: [
          { nombre: 'Estofados', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' }
        ],
        // ubicacion: 'assets/images/productos/res/huesosRes.svg',
      },
      {
        id: 'asadoPejerrey',
        categoria: 'lineaRes',
        titulo: 'Asado de Pejerrey',
        imagen: 'assets/images/productos/res/asadoPejerrey.jpg',
        descripcion: 'Es un corte alargado y redondeado que termina en punta. Es uniforme y de carne compacta.',
        // recomendaciones: ['Horno'],
        recomendaciones: [
          { nombre: 'Horno', icon: 'assets/images/iconsRecomendaciones/iconHorno.svg' }
        ],
        ubicacion: 'assets/images/productos/res/asadoPejerrey.svg',
      },









      //cerdo

      {
        id: 'bondiolaSinPielSinHueso',
        categoria: 'lineaCerdo',
        titulo: 'Bondiola sin piel sin hueso',
        imagen: 'assets/images/productos/cerdo/bondiolaSinPielSinHueso.jpg',
        descripcion: 'Es el pescuezo deshuesado. Gracias a la grasa que posee entre sus músculos, es un corte muy sabroso, tierno y jugoso.',
        // recomendaciones: ['Guisos', 'Plancha', 'Parrillas'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' }
        ],
        ubicacion: 'assets/images/productos/cerdo/bondiola.svg',
      },
      {
        id: 'brazueloSinPielSinHueso',
        categoria: 'lineaCerdo',
        titulo: 'Brazuelo sin piel sin hueso',
        imagen: 'assets/images/productos/cerdo/brazueloSinPielSinHueso.jpg',
        descripcion: 'Corte correspondiente a la extremidad delantera (paleta), a la cual se le ha retirado la piel y el hueso, quedando con o sin una capa de grasa.',
        // recomendaciones: ['Guisos'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' }
        ],
        ubicacion: 'assets/images/productos/cerdo/brazuelo.svg',
      },
      {
        id: 'piernaSinPielSinHueso',
        categoria: 'lineaCerdo',
        titulo: 'Pierna sin piel sin hueso',
        imagen: 'assets/images/productos/cerdo/piernaSinPielSinHueso.jpg',
        descripcion: 'Corte correspondiente a la extremidad trasera (pierna), a la cual se le ha retirado la piel y el hueso, quedando con o sin una capa de grasa.',
        // recomendaciones: ['Guisos'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' }
        ],
        ubicacion: 'assets/images/productos/cerdo/pierna.svg',
      },
      {
        id: 'lomoFinoCerdo',
        categoria: 'lineaCerdo',
        titulo: 'Lomo fino',
        imagen: 'assets/images/productos/cerdo/lomoFino.jpg',
        descripcion: 'Es el corte más fino y tierno. Tiene menos grasa y se encuentra en la parte interior final de la chuleta.',
        // recomendaciones: ['Guisos', 'Freir', 'Plancha'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
        ],
        ubicacion: 'assets/images/productos/cerdo/lomoFino.svg',
      },
      {
        id: 'patitaCerdo',
        categoria: 'lineaCerdo',
        titulo: 'Patita de cerdo',
        imagen: 'assets/images/productos/cerdo/patitaCerdo.jpg',
        descripcion: 'Patas de cerdo.',
        // recomendaciones: ['Guisos'],
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' }
        ],
        ubicacion: 'assets/images/productos/cerdo/patitaCerdo.svg',
      },
      {
        id: 'molidaCerdo',
        categoria: 'lineaCerdo',
        titulo: 'Molida',
        imagen: 'assets/images/productos/cerdo/molidaCerdo.jpg',
        descripcion: 'Son trozos de carne de cerdo molida.',
        // recomendaciones: ['Freir', 'Plancha'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' }
        ],
        // ubicacion: 'assets/images/productos/cerdo/molida.svg',
      },
      {
        id: 'pancetaConPielConHueso',
        categoria: 'lineaCerdo',
        titulo: 'Panceta con piel con hueso',
        imagen: 'assets/images/productos/cerdo/pancetaConPielConHueso.jpg',
        descripcion: 'Corte que comprende la falda o parte abdominal. Contiene piel, huesos de las costillas y los músculos blandos que la rodean.',
        // recomendaciones: ['Freir', 'Plancha', 'Parrillas'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
        ],
        ubicacion: 'assets/images/productos/cerdo/panceta.svg',
      },
      {
        id: 'pancetaSinPielConHueso',
        categoria: 'lineaCerdo',
        titulo: 'Panceta sin piel con hueso',
        imagen: 'assets/images/productos/cerdo/pancetaSinPielConHueso.jpg',
        descripcion: 'Corte que comprende la falda o parte abdominal, a la cual se ha retirado la piel. Presenta los huesos de las costillas y los músculos blandos que la rodean.',
        // recomendaciones: ['Freir', 'Plancha', 'Parrillas'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
        ],
        ubicacion: 'assets/images/productos/cerdo/panceta.svg',
      },
      {
        id: 'pancetaSinPielSinHueso',
        categoria: 'lineaCerdo',
        titulo: 'Panceta sin piel sin hueso',
        imagen: 'assets/images/productos/cerdo/pancetaSinPielSinHueso.jpg',
        descripcion: 'Corte que comprende la falda o parte abdominal, a la cual se ha retirado la piel y los huesos de las costillas, quedando los músculos blandos que la rodean.',
        // recomendaciones: ['Freir', 'Plancha', 'Parrillas'],
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
        ],
        ubicacion: 'assets/images/productos/cerdo/panceta.svg',
      },
      {
        id: 'chueltaConPielConHuesoPorcionado',
        categoria: 'lineaCerdo',
        titulo: 'Chuleta con piel con hueso porcionado',
        imagen: 'assets/images/productos/cerdo/chueltaConPielConHuesoPorcionado.jpg',
        descripcion: 'Pieza obtenida del dorso con piel y con hueso. Se moldea y se congela para su posterior porcionado.',
        // recomendaciones: ['Plancha', 'Parrillas'],
        recomendaciones: [
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
        ],
        ubicacion: 'assets/images/productos/cerdo/chuleta.svg',
      },
      {
        id: 'chueltaSinPielConHuesoPorcionado',
        categoria: 'lineaCerdo',
        titulo: 'Chuleta sin piel con hueso porcionado',
        imagen: 'assets/images/productos/cerdo/chueltaSinPielConHuesoPorcionado.jpg',
        descripcion: 'Pieza obtenida del dorso a la cual se le ha retirado la piel. Se moldea y se congela para su posterior porcionado.',
        // recomendaciones: ['Plancha', 'Parrillas'],
        recomendaciones: [
          { nombre: 'A la plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrillas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
        ],
        ubicacion: 'assets/images/productos/cerdo/chuleta.svg',
      },
      {
        id: 'piernaConPielConHueso',
        categoria: 'lineaCerdo',
        titulo: 'Pierna con piel con hueso',
        imagen: 'assets/images/productos/cerdo/piernaConPielConHueso.jpg',
        descripcion: 'Corte con piel y con hueso, correspondiente a la extremidad trasera.',
        // recomendaciones: ['Horno'],
        recomendaciones: [
          { nombre: 'Horno', icon: 'assets/images/iconsRecomendaciones/iconHorno.svg' },
        ],
        ubicacion: 'assets/images/productos/cerdo/pierna.svg',
      },



      //Aves

      {
        id: 'molleja',
        categoria: 'lineaAves',
        titulo: 'Molleja',
        imagen: 'assets/images/productos/aves/molleja.jpg',
        descripcion: 'Molleja corte Mariposa, perfecto para acompañarlo con un deliciosa parrilla.',
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Parrilla', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
          { nombre: 'Estofado', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' },
        ],
      },
      {
        id: 'filetePechugaPollo',
        categoria: 'lineaAves',
        titulo: 'Filete de pechuga de pollo',
        imagen: 'assets/images/productos/aves/filetePechugaPollo.jpg',
        descripcion: 'Gracias a la versatilidad culinaria, es la base para diversos platos, debido a su alto contenido en proteínas y su delicioso sabor.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Parrilla', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
          { nombre: 'Estofado', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' },
        ],
      },
      {
        id: 'polloEntero',
        categoria: 'lineaAves',
        titulo: 'Pollo entero',
        imagen: 'assets/images/productos/aves/polloEntero.jpg',
        descripcion: 'Pollo congelado sin menudencia, cuenta con los más altos estándares de calidad y con pesos desde 1.6 Kg. hasta 2kg.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Parrilla', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
          { nombre: 'Estofado', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' },
        ],
      },
      {
        id: 'piernaEncuentro',
        categoria: 'lineaAves',
        titulo: 'Pierna con encuentro',
        imagen: 'assets/images/productos/aves/piernaEncuentro.jpg',
        descripcion: 'Comprende la pierna, el muslo y la parte superiro del espinazo, es un corte utilizado para diversos platos.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Parrilla', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
          { nombre: 'Estofado', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' },
        ],
      },
      {
        id: 'gallina',
        categoria: 'lineaAves',
        titulo: 'Gallina',
        imagen: 'assets/images/productos/aves/gallina.jpg',
        descripcion: 'Gallina con menudencia, cuenta con los más altos estándares de calidad, con un peso aproximado de 3.5kg.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Parrilla', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
          { nombre: 'Estofado', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' },
        ],
      },
      {
        id: 'piernaPavo',
        categoria: 'lineaAves',
        titulo: 'Pierna de pavo',
        imagen: 'assets/images/productos/aves/piernaPavo.jpg',
        descripcion: 'Piernas jugosas y perfectas para para la preparacion de diversos platos.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Parrilla', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
          { nombre: 'Estofado', icon: 'assets/images/iconsRecomendaciones/iconEstofados.svg' },
        ],
      },


      //Menudencia

      {
        id: 'higado',
        categoria: 'lineaMenudencia',
        titulo: 'Hígado',
        imagen: 'assets/images/productos/menudencia/higado.jpg',
        descripcion: 'Imporante para el complemento alimenticio con un gran aporte de proteínas, perfecto para Saltado, frio o encebollado.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Plancha', icon: 'assets/images/iconsRecomendaciones/iconALaPlancha.svg' },
          { nombre: 'Parrilla', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
        ],
      },
      {
        id: 'mondongo',
        categoria: 'lineaMenudencia',
        titulo: 'Mondongo',
        imagen: 'assets/images/productos/menudencia/mondongo.jpg',
        descripcion: 'Perfecto para un delicioso y peruanísimo cau cau o un mondonguito a la italiana.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
          { nombre: 'Caldos', icon: 'assets/images/iconsRecomendaciones/iconSopas.svg' },
        ],
      },
      {
        id: 'corazon',
        categoria: 'lineaMenudencia',
        titulo: 'Corazón',
        imagen: 'assets/images/productos/menudencia/corazon.jpg',
        descripcion: 'Ideal para unos deliciosos anticuchos a la parrilla.',
        recomendaciones: [
          { nombre: 'Freir', icon: 'assets/images/iconsRecomendaciones/iconFreir.svg' },
          { nombre: 'Parrilas', icon: 'assets/images/iconsRecomendaciones/iconParrillas.svg' },
        ],
      },
      {
        id: 'pulmonBofe',
        categoria: 'lineaMenudencia',
        titulo: 'Pulmón (Bofe)',
        imagen: 'assets/images/productos/menudencia/pulmonBofe.jpg',
        descripcion: 'Ideal para preparar el tradicional plato criollo, chanfainita.',
        recomendaciones: [
          { nombre: 'Guisos', icon: 'assets/images/iconsRecomendaciones/iconGuisos.svg' },
        ],
      },

      
     
    ]




  getProductos() {
    return of(this.productos);
  }

  getProductosRes() {
    return of(this.productos.filter(el => el.categoria === 'lineaRes'));
  }

  getProductosCerdo() {
    return of(this.productos.filter(el => el.categoria === 'lineaCerdo'));
  }

  getProductosAves() {
    return of(this.productos.filter(el => el.categoria === 'lineaAves'));
  }

  getProductosMenudencia() {
    return of(this.productos.filter(el => el.categoria === 'lineaMenudencia'));
  }

  getProducto<Producto>(id) {
    return of(this.productos.find(p => p.id === id));
  }



}
