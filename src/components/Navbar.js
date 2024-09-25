import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg rounded-3">
      <div className="container-fluid py-2 px-4">
        <a className="navbar-brand text-light fw-bold fs-3" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.homeText}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 border-0 rounded-3 bg-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light border-0 rounded-3" type="submit">
              {props.search}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  aboutText: PropTypes.string,
  search: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    homeText: "Home Title here",
    aboutText: " About Title here",
    search: "Search"
  };

export default Navbar;

