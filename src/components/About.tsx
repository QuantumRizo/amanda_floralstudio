const About = () => {
  return (
    <section id="sobre-nosotros" className="about">
      <div className="container about-container">
        <div className="about-image-side">
          <img src="/sobrenosotros.jpeg" alt="Nuestra Historia" className="about-img" />
        </div>
        <div className="about-text-side">
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="about-p">
            En Amanda Studio, creemos que las flores son el lenguaje más puro de la emoción. Cada ramo es una pieza de arte, diseñada con meticulosidad y pasión.
          </p>
          <p className="about-p">
            Nuestra misión es transformar momentos cotidianos en recuerdos extraordinarios a través de la elegancia floral y el diseño contemporáneo.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
