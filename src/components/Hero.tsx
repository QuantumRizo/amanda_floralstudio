const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/logo.png" alt="Amanda Studio Logo" className="hero-logo-img" />
          </div>
          <h1 className="hero-title">
            Lo que se ama <br />
            florece.
          </h1>
          <p className="hero-description">
            Descubre el arte de regalar. Pide tu<br />
            arreglo personalizado hoy.
          </p>
          <a href="https://www.instagram.com/amanda_floralstudio/" target="_blank" rel="noopener noreferrer" className="hero-btn">Pide tu arreglo ya</a>
        </div>
        <div className="hero-image-wrapper">
          <img src="/hero.png" alt="Bouquet Floral" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
