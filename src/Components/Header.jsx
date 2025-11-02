import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/Images/logo.png";
import Logo1 from "../assets/Images/logo.png";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const toggleOffcanvas = () => setShow(!show);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const videoRef = useRef(null);

  // Close modal when clicking outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  // Close modal on outside click
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <>
      <div className="container-fluid p-0 bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-2 bg-black d-none d-md-flex align-items-center justify-content-center p-3">
              <div className="d-flex align-items-center p-0">
                <a
                  className="navbar-brand d-flex flex-column align-items-start p-0"
                  href="/"
                >
                  <img src={Logo} alt="Logo" style={{ height: "60px" }} />
                </a>
              </div>
            </div>
            <div className="col-md-10 p-0">
              <div className="header d-none d-lg-flex align-items-center justify-content-center py-2 transition">
                <div className="container">
                  <div className="row py-2 align-items-center justify-content-between">
                    <div className="col-md-auto">
                      <ul className="list-unstyled d-flex gap-5 m-0">
                        <li className="d-flex align-items-center gap-3">
                          <div className="text-start fw-bold d-flex flex-column">
                            <a
                              className="text-decoration-none text-white hover-link"
                              href="tel:+12 (3456) 7890"
                            >
                              <i className="bi bi-telephone-fill highlight fs-5 me-2"></i>
                              12 (3456) 7890
                            </a>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="text-start fw-bold d-flex flex-column">
                            <a
                              className="text-decoration-none text-white hover-link"
                              href="mailto:info@urbangov.com"
                            >
                              <i className="bi bi-envelope-fill highlight fs-5 me-2"></i>
                              info@urbangov.com
                            </a>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="text-start text-white fw-bold">
                            <i className="bi bi-clock-fill highlight fs-5 me-2"></i>
                            Open hours: Mon - Fri 8.00 am - 6.00 pm
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-auto d-none d-md-flex align-items-center justify-content-end text-white fw-semibold">
                      <SocialIcons />
                    </div>
                  </div>
                </div>
              </div>

              <nav
                className={`navbar navbar-expand-lg bg-white py-2 ${
                  navbarFixed ? "fixed-top shadow-sm" : ""
                }`}
              >
                <div className="container">
                  <div className="d-md-none d-flex align-items-center p-0">
                    <a
                      className="navbar-brand d-flex flex-column align-items-start p-0"
                      href="/"
                    >
                      <img src={Logo} alt="Logo" style={{ height: "60px" }} />
                    </a>
                  </div>

                  <div
                    className="collapse navbar-collapse justify-content-start"
                    id="navbarNav"
                  >
                    <ul className="navbar-nav d-flex align-items-center gap-4">
                      <li className="nav-item py-2">
                        <a
                          className="nav-link fw-bold position-relative active-link text-uppercase"
                          href="/"
                        >
                          HOME
                        </a>
                      </li>

                      <li
                        className="nav-item py-2 position-relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <button className="nav-link fw-bold position-relative bg-transparent border-0 text-uppercase">
                          ABOUT
                          <i className="bi bi-caret-down-fill ms-1"></i>
                        </button>

                        {isDropdownOpen && (
                          <ul className="dropdown-menu show rounded-0 position-absolute start-50 translate-middle-x">
                            <li>
                              <a
                                className="dropdown-item text-muted"
                                href="/about"
                              >
                                About Us
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-muted"
                                href="/history"
                              >
                                Our History
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-muted"
                                href="/events"
                              >
                                Events
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-muted"
                                href="/faq"
                              >
                                FAQs
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>

                      <li className="nav-item py-2">
                        <a
                          className="nav-link fw-bold position-relative text-uppercase"
                          href="/services"
                        >
                          SERVICES
                        </a>
                      </li>

                      <li className="nav-item py-2">
                        <a
                          className="nav-link fw-bold position-relative text-uppercase"
                          href="/departments"
                        >
                          Departments
                        </a>
                      </li>

                      <li className="nav-item py-2">
                        <a
                          className="nav-link fw-bold position-relative text-uppercase"
                          href="/news"
                        >
                          News
                        </a>
                      </li>

                      <li className="nav-item py-2">
                        <a
                          className="nav-link fw-bold position-relative text-uppercase"
                          href="/contact"
                        >
                          CONTACT
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-auto d-none d-md-flex align-items-center justify-content-end">
                    <button className="btn btn-lg button fw-bold rounded-0 px-3 py-2 text-white position-relative overflow-hidden">
                      Report an Issue
                    </button>
                  </div>

                  <button
                    className="navbar-toggler rounded-0 border-dark custom-border"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileMenu"
                    aria-controls="mobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Offcanvas */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="mobileMenu"
          aria-labelledby="mobileMenuLabel"
        >
          <div className="offcanvas-header py-3 mx-3">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img src={Logo1} alt="Logo" style={{ height: "40px" }} />
            </a>
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-flex align-items-center justify-content-center">
            <ul className="navbar-nav text-center text-uppercase">
              <li className="nav-item py-3">
                <a className="nav-link fw-bold fs-5 text-white" href="/">
                  Home
                </a>
              </li>
              <li
                className="nav-item py-3 position-relative justify-content-center"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="nav-item fw-bold text-uppercase fs-5 text-white bg-transparent border-0">
                  About
                  <i className="bi bi-caret-down-fill ms-1"></i>
                </button>

                {isDropdownOpen && (
                  <ul className="dropdown-menu show rounded-0 position-absolute start-50 translate-middle-x">
                    <li>
                      <a className="dropdown-item text-muted" href="/about">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-muted" href="/about">
                        Leadership
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-muted" href="/about">
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-muted" href="/team">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-muted" href="/team">
                        Partners
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item py-3 fs-5">
                <a className="nav-link fw-bold text-white" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item py-3 fs-5">
                <a className="nav-link fw-bold text-white" href="/services">
                  Care Options
                </a>
              </li>
              <li className="nav-item py-3 fs-5">
                <a className="nav-link fw-bold text-white" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item py-3 fs-5">
                <a className="nav-link fw-bold text-white" href="/contact-us">
                  Contact Us
                </a>
              </li>
              {/* <GlobalButton
                text="Join With Us"
                href="/career"
                variant="buttonv1"
              /> */}
              <div className="row pt-4">
                <div className="col-12 d-flex align-items-center justify-content-end text-white">
                  <span className="mb-0 px-3 small">News & Events</span>
                  <span className="mb-0 px-3 border-start border-white small">
                    Donate
                  </span>
                  <span className="mb-0 px-3 border-start border-white small">
                    Career
                  </span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
