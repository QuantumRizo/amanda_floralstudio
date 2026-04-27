const images = [
  { id: 1, src: '/ramo1.webp' },
  { id: 2, src: '/ramo2.webp' },
  { id: 3, src: '/ramo3.webp' },
  { id: 4, src: '/ramo4.webp' },
];

const Ramos = () => {
  return (
    <section id="trabajo" className="ramos">
      <div className="container">
        <h2 className="section-title">Nuestro Trabajo</h2>
        <div className="ramos-grid">
          {images.map((img) => (
            <div key={img.id} className="ramo-card">
              <div className="ramo-image-container">
                <img src={img.src} alt={`Ramo ${img.id}`} className="ramo-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ramos;
