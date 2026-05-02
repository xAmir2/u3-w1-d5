export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-black border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a href="https://www.netflix.com/">
          <img
            src="../src/assets/netflix_logo.png"
            alt="netflix_logo"
            style={{ width: "100px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                TV Shows
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Recently Added
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2 bg-black border-0 text-light"
              type="search"
              placeholder="Search"
            />
            <button className="btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search text-light"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>

          <div className="d-flex align-items-center ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill text-light mx-3 d-none d-lg-block"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>

            <li className="nav-item d-none d-lg-block me-2">
              <a className="nav-link text-light" href="#">
                KIDS
              </a>
            </li>

            <div className="dropdown">
              <button
                className="btn p-0 border-0 d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="../src/assets/avatar.png"
                  alt="avatar"
                  width="35"
                  className="rounded-1"
                />
              </button>

              <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
                <li>
                  <a className="dropdown-item" href="profilepage.html">
                    Manage Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="profilepage.html">
                    Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="settingspage.html">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="#">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
