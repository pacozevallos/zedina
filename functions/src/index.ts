import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

const SENDGRID_API_KEY = functions.config().sendgrid.key;
import * as sgMail from '@sendgrid/mail';
sgMail.setApiKey(SENDGRID_API_KEY);

export const nuevoMensaje = functions.firestore.document('mensajes/{mensajeId}').onCreate( async (change, context) => {
  const postSnap = await db.collection('mensajes').doc(context.params.mensajeId).get();
  // tslint:disable-next-line:no-non-null-assertion
  const mensaje = postSnap.data()!;
  const msg = {
      from: 'dlandeo@carneszedina.com',
      to: 'dlandeo@carneszedina.com',
      bcc: 'carneszedinaperu@gmail.com',
      templateId: 'd-89d05418e60640b092dd8b370b51eea5',
      dynamic_template_data: {
        personaContacto: mensaje.personaContacto,
        celular: mensaje.celular,
        email: mensaje.email,
        mensaje: mensaje.mensaje,
        nombreComercial: mensaje.nombreComercial,
        ruc: mensaje.ruc
      },
  };

  return sgMail.send(msg)
  .then(() => console.log('email enviado!'))
  .catch(err => console.log(err));



});