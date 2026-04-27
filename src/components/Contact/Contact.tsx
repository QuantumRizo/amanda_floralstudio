import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <div className="container contact-container">
        <div className="contact-header">
          <h2 className="section-title">Contacto</h2>
          <p className="contact-subtitle">¿Tienes alguna pregunta o quieres un pedido especial? Escríbenos.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-block">
              <h3>Visítanos</h3>
              <p>Puebla, México</p>
            </div>
            <div className="info-block">
              <h3>Horario</h3>
              <p>Lun - Vie: 9:00 - 20:00<br />Sáb: 10:00 - 18:00</p>
            </div>
            <div className="info-block">
              <h3>Directo</h3>
              <p>+52 2216872221</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Tu Nombre" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Tu Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="¿En qué podemos ayudarte?" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
