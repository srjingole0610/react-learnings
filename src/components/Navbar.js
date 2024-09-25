import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} shadow-lg rounded-3`}
    >
      <div className="container-fluid py-2 px-4">
        <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'} fw-bold fs-3`} href="/">
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
              className={`form-control me-2 border-1 rounded-3 bg-light text-${props.mode === 'light' ? 'dark' : 'light'}` }
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`btn btn-outline-${props.mode === 'light' ? 'light' : 'dark'} border-0 rounded-3  text-${props.mode === 'light' ? 'dark' : 'light'}`}
              type="submit"
            >
              {props.search}
            </button>
          </form>
          <div className="form-check form-switch ms-3 d-flex align-items-center">
            <input
              className="form-check-input appearance-none w-5 h-5 border border-gray-300 rounded-full checked:bg-primary-600 checked:border-primary-600 focus:outline-none transition duration-150"
              type="checkbox"
              onClick={props.toggleStyle}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} ms-2`} htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  aboutText: PropTypes.string,
  search: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  homeText: "Home Title here",
  aboutText: " About Title here",
  search: "Search",
};

export default Navbar;


