import "./styles.css";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a href="#home" className="navbar-brand">
        <img
          alt=""
          src="/logo.svg"
          className="d-inline-block align-top"
          width="30"
          height="30"
        />
      </a>
      <button
        aria-controls="responsive-navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        className="navbar-toggler collapsed"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="responsive-navbar-nav">
        <div className="me-auto navbar-nav">
          <div className="nav-item dropdown">
            <a
              aria-haspopup="true"
              aria-expanded="false"
              id="collasible-nav-dropdown"
              className="dropdown-toggle nav-link"
              role="button"
              href="#"
            >
              Home
            </a>
          </div>
          <div className="nav-item dropdown">
            <a
              aria-haspopup="true"
              aria-expanded="false"
              id="collasible-nav-dropdown"
              className="dropdown-toggle nav-link"
              role="button"
              href="#"
            >
              Blog
            </a>
          </div>
          <div className="nav-item dropdown">
            <a
              aria-haspopup="true"
              aria-expanded="false"
              id="collasible-nav-dropdown"
              className="dropdown-toggle nav-link"
              role="button"
              href="#"
            >
              Shop
            </a>
          </div>
        </div>
        <div className="navbar-nav">
          <a className="nav-link">
            <i className="far fa-shopping-basket"></i>
          </a>
          <a className="nav-link">
            <i className="far fa-search" />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
