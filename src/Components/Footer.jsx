import React from "react";
import Logo from "../assets/logo 1.png";
import SocialIcons from "./SocialIcons";
import { galleryData } from "../Constant/Data";

export default function Footer() {
  return (
    <footer className="container-fluid text-white p-0 w-100 footer">
      <div className="container">
        {/* First Row */}
        <div className="row mx-0 py-4">
          <div className="col-12 col-md-3 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start">
            <div className="row">
              <img src={Logo} alt="logo" style={{ height: "130px" }} />
            </div>

            <ul className="list-unstyled mt-3 lh-lg">
              <li className="d-flex align-items-center gap-3">
                <div className="text-start fw-bold d-flex flex-column">
                  <a
                    className="text-decoration-none text-dark hover-link"
                    href="tel:+(01) 9886 0005"
                  >
                    <i className="bi bi-telephone fs-5 me-2"></i>
                    +(01) 9886 0005
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="text-start fw-bold d-flex flex-column">
                  <a
                    className="text-decoration-none text-dark hover-link"
                    href="mailto:info@urbangov.com"
                  >
                    <i className="bi bi-envelope fs-5 me-2"></i>
                    info@urbangov.com
                  </a>
                </div>
              </li>
            </ul>
            <div className="d-flex align-items-start">
              <SocialIcons />
            </div>
          </div>

          <div className="col-12 col-md-2 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start">
            <h4 className="my-4 text-dark fw-bold heading">Quick Links</h4>
            <ul className="list-unstyled text-dark fw-semibold lh-lg">
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-decoration-none text-dark hover-link"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services"
                  className="text-decoration-none text-dark hover-link"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/departments"
                  className="text-decoration-none text-dark hover-link"
                >
                  Departments
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/news"
                  className="text-decoration-none text-dark hover-link"
                >
                  News
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/events"
                  className="text-decoration-none text-dark hover-link"
                >
                  Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/faq"
                  className="text-decoration-none text-dark hover-link"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start">
            <h4 className="my-4 text-dark heading fw-bold">Services</h4>
            <ul className="list-unstyled text-dark fw-semibold lh-lg">
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-decoration-none text-dark hover-link"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services"
                  className="text-decoration-none text-dark hover-link"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/departments"
                  className="text-decoration-none text-dark hover-link"
                >
                  Departments
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/news"
                  className="text-decoration-none text-dark hover-link"
                >
                  News
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/events"
                  className="text-decoration-none text-dark hover-link"
                >
                  Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/faq"
                  className="text-decoration-none text-dark hover-link"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start">
            <h4 className="my-4 text-dark heading fw-bold">Departments</h4>
            <ul className="list-unstyled text-dark fw-semibold lh-lg">
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-decoration-none text-dark hover-link"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services"
                  className="text-decoration-none text-dark hover-link"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/departments"
                  className="text-decoration-none text-dark hover-link"
                >
                  Departments
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/news"
                  className="text-decoration-none text-dark hover-link"
                >
                  News
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/events"
                  className="text-decoration-none text-dark hover-link"
                >
                  Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/faq"
                  className="text-decoration-none text-dark hover-link"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start">
            <h4 className="my-4 text-dark heading fw-bold">Gallery</h4>
            <div className="row">
              {galleryData.map((image, index) => (
                <div key={index} className="col-4 mb-3">
                  <div className="image-container position-relative">
                    <img
                      src={image}
                      alt={`Gallery image ${index}`}
                      style={{ width: "90px", height: "90px" }}
                    />
                    <div className="overlay position-absolute start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                      <i className="bi bi-instagram text-white"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="border-top">
        <div className="container">
          <div className="row justify-content-between align-items-center py-3">
            <div className="col-12 text-center">
              <p className="text-dark fw-bold gy-3 py-2 m-0">
                © {new Date().getFullYear()} UrbanGov. All right reserved. |
                Designed by Deniya Edwinraj
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
