import React from "react";
import Logo from "../assets/logo.png";
import SocialIcons from "./SocialIcons";
import { departments, footerGalleryData, services } from "../Constant/Data";

export default function Footer() {
  return (
    <footer className="container-fluid text-white p-0 w-100 footer">
      <div className="container">
        {/* Subscribe */}
        <div className="row bg-black p-4">
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center">
            <img src={Logo} alt="logo" style={{ height: "120px" }} />
          </div>
          <div className="col-md-8 d-flex justify-content-center justify-content-md-start align-items-center mt-4 mt-md-0">
            <form className="newsletter input-group input-group-lg w-100">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control rounded-0 me-3 p-3"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  required
                />
                <button
                  className="btn btn-lg button fw-bold rounded-0 px-4 py-3 text-white position-relative overflow-hidden"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="row mx-0 py-4">
          <div className="col-12 col-md-3 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start">
            <h4 className="my-4 text-white fw-bold heading">Contact</h4>

            <p className="text-light small">
              UrbanGov is a citizen-first platform that simplifies access to
              government services
            </p>

            <ul className="list-unstyled lh-lg">
              <li className="d-flex align-items-center gap-3">
                <div className="text-start fw-bold d-flex flex-column">
                  <a
                    className="text-decoration-none text-white hover-link"
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
                    className="text-decoration-none text-white hover-link"
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

          <div className="col-12 col-md-2 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start text-white">
            <h4 className="my-4 text-white fw-bold heading">Quick Links</h4>
            <ul className="list-unstyled fw-semibold lh-lg">
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-decoration-none text-white hover-link"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services"
                  className="text-decoration-none text-white hover-link"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/departments"
                  className="text-decoration-none text-white hover-link"
                >
                  Departments
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/news"
                  className="text-decoration-none text-white hover-link"
                >
                  News
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/events"
                  className="text-decoration-none text-white hover-link"
                >
                  Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/faq"
                  className="text-decoration-none text-white hover-link"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start text-white">
            <h4 className="my-4 text-white heading fw-bold">Services</h4>
            <ul className="list-unstyled text-white fw-semibold lh-lg">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/services#${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-decoration-none text-white hover-link d-flex align-items-center gap-2"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-2 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start text-white">
            <h4 className="my-4 text-white heading fw-bold">Departments</h4>
            <ul className="list-unstyled text-white fw-semibold lh-lg">
              {departments.map((dept, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`/departments#${dept.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-decoration-none text-white hover-link d-flex align-items-center gap-2"
                  >
                    {dept.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-3 my-0 my-lg-4 d-flex flex-column text-center text-md-start align-items-center align-items-md-start text-white">
            <h4 className="my-4 text-white heading fw-bold">Gallery</h4>
            <div className="row">
              {footerGalleryData.map((image, index) => (
                <div key={index} className="col-4 mb-3">
                  <div
                    className="image-container position-relative border-dark d-inline-block overflow-hidden"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                      style={{ top: 0, left: 0 }}
                    >
                      <i className="bi bi-instagram text-white"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyrights */}
      <div className="border-top custom-border">
        <div className="container">
          <div className="row justify-content-between align-items-center py-2">
            <div className="col-12 text-center">
              <p className="text-white gy-3 lh-lg py-2 m-0 small">
                © {new Date().getFullYear()}{" "}
                <span className="highlight fw-bold">UrbanGov</span>. All right
                reserved. <br />
                Designed by{" "}
                <span className="highlight fw-bold">Deniya Edwinraj</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
