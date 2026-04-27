import './Ramos.css';

const productos = [
  { id: 1, nombre: 'EL ROMÁNTICO', desc: 'Arreglo de rosas rosadas para un toque clásico y elegante.', precio: '$xxx MXN' },
  { id: 2, nombre: 'EL SILVESTRE Y LIBRE', desc: 'Mezcla natural con pastos secos y flores blancas de campo.', precio: '$xxx MXN' },
  { id: 3, nombre: 'EL MINIMALISTA', desc: 'Sencillez elegante con ranúnculos blancos puros y eucalipto.', precio: '$xxx MXN' },
  { id: 4, nombre: 'EL NATURAL', desc: 'Descubre la belleza de lo orgánico en cada pétalo.', precio: '$xxx MXN' },
  { id: 5, nombre: 'BRISA DE VERANO', desc: 'Flores frescas que capturan la esencia de la estación.', precio: '$xxx MXN' },
  { id: 6, nombre: 'SUEÑO PASTEL', desc: 'Tonos suaves para momentos de paz y serenidad.', precio: '$xxx MXN' },
];

const Ramos = () => {
  return (
    <section id="ramos" className="ramos">
      <div className="container">
        <h2 className="section-title">Colecciones Destacadas</h2>
        <div className="ramos-grid">
          {productos.map((prod) => (
            <div key={prod.id} className="ramo-card">
              <div className="ramo-image-container">
                <img src="/example.png" alt={prod.nombre} className="ramo-image" />
              </div>
              <div className="ramo-info">
                <h3 className="ramo-name">{prod.nombre}</h3>
                <p className="ramo-desc">{prod.desc}</p>
                <div className="ramo-footer">
                  <span className="ramo-price">{prod.precio}</span>
                  <button className="ramo-btn">Añadir al Carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ramos;
