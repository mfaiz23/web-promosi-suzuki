import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom py-3 sticky-navbar">
          <div className="container">
            {/* Brand */}
            <a href="/" className="navbar-brand d-flex align-items-center">
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use href="#bootstrap"></use>
              </svg>
              <span className="fs-4">Simple Header</span>
            </a>

            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="mobilDropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Mobil
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="mobilDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Sedan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SUV
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hatchback
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a onClick={() => navigate('/harga')} href="/harga" className="nav-link">
                    Daftar Harga
                  </a>
                </li>
                <li className="nav-item">
                 <a onClick={() => navigate('/galeri')} href="/galeri" className="nav-link">
                    Galeri
                  </a>
                </li>
                <li className="nav-item">
                   <a onClick={() => navigate('/news')} href="/news" className="nav-link">
                    Info Terbaru
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
