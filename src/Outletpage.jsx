import React from "react";
import { NavLink } from "react-router-dom";

const Outletpage = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="../src/images/logo.png" alt="" width="30" height="24" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li class="nav-item ">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li class="nav-item ">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner d-flex">
          <div
            class="carousel-item active d-flex justify-content-center"
            data-bs-interval="2000"
          >
            <img src="../src/images/hero.png" class="d-block w-50 " alt="..." />
          </div>
          <div
            class="carousel-item d-flex justify-content-center"
            data-bs-interval="2000"
          >
            <img src="../src/images/hero.png" class="d-block w-50 " alt="..." />
          </div>
          <div
            class="carousel-item d-flex justify-content-center"
            data-bs-interval="2000"
          >
            <img src="../src/images/hero.png" class="d-block w-50" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Outletpage;
