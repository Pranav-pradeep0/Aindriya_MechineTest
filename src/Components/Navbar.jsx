import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg flex-wrap">
        <div class="container-fluid gap-3">
          <a class="navbar-brand text-white " href="#">
            BID WINNER
          </a>
          <button
            class="navbar-toggler text-white bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div class="collapse navbar-collapse flex-wrap gap-3" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href=""
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="">
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="">
                  Calendar
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="">
                  Cost Catalog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="">
                  Database
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="">
                  Tutorials
                </a>
              </li>
            </ul>

            <div className="mb-2 mx-auto">
              <button class="nav-item dropdown d-flex mx-auto btn border-white">
                <a
                  class="nav-link text-white d-flex gap-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="d-flex gap-3">
                    <div className="d-grid text-end">
                      <strong>Jane Cooper</strong>
                      <small>janecooper@gmail.com</small>
                    </div>
                    <div>
                      <img
                        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                        className="img-fluid user-img"
                        alt=""
                      />
                    </div>
                    <i class="fa-solid fa-caret-down my-auto"></i>
                  </div>
                  <button
                    type="button"
                    class="btn position-relative"
                  >
                    <i class="fa-regular text-white fa-bell"></i>
                    <span class="position-absolute top-10 translate-middle p-1 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </button>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
