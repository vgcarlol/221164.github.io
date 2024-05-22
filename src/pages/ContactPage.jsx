import React from 'react';
import '../styles/ContactPage.css'; // Importando el archivo CSS personalizado

function ContactPage() {
  return (
    <div className="contact-page">
      <div class="contact-info">
      <h1>Contacto</h1>
      <p>Puedes contactarme en cualquier momento a través de:</p>
      <ul>
          <li>Email: carlolvgjunior@gmail.com</li>
          <li>Teléfono: +502 4460-5615</li>
          <li>Dirección: 1a av. 3-31 zona 2, Sanarate, El Progreso, Guatemala</li>
      </ul>
      </div>
      <div className="contact-form">
        <h2>Envíame un mensaje</h2>
        <form>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo electrónico" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}


export default ContactPage;
