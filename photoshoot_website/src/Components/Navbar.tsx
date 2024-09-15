import "../Styles/Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className="nav-container">
                <div className="navbar-model-name">
                    Frangelica
                </div>
                <div className="navbar-links">
                <a href="/" className="navbar-link">  Galleria </a>
                <a href="/Contact" className="navbar-link"> Contactos </a>
                </div>
                  
               
            </nav>
        </div>
    )
}
export default Navbar