import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="navbar-logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#ramos">Ramos</a></li>
          <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
