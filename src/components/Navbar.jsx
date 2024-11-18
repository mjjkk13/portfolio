const Navbar = () => {
    return (
      <div className="navbar bg-base-100 fixed top-0 z-50 shadow-lg">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Mi Portfolio</a>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Navbar