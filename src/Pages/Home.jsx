import React, { useState, useEffect, useRef } from "react";
import {
  aboutCards,
  logos,
  posts,
  services,
  slideData,
} from "../Constant/Data";
import ServicesListbg from "../assets/services-bg.png";
import AboutLargeimg from "../assets/about-1.jpeg";
import AboutSmallimg from "../assets/about-2.jpeg";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const intervalRef = useRef(null);
  const zoomIntervalRef = useRef(null);

  // Date & time getting
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, slideData.length]);

  // Background zoom effect
  useEffect(() => {
    // Reset zoom level when slide changes
    setZoomLevel(100);

    // Start zoom animation
    zoomIntervalRef.current = setInterval(() => {
      setZoomLevel((prevZoom) => {
        if (prevZoom >= 110) {
          return 110; // Max zoom level
        }
        return prevZoom + 0.05; // Smooth zoom increment
      });
    }, 50); // Adjust speed of zoom

    return () => {
      if (zoomIntervalRef.current) {
        clearInterval(zoomIntervalRef.current);
      }
    };
  }, [activeIndex]);

  // Function to get the ordinal suffix (st, nd, rd, th)
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Handle 11th, 12th, 13th, etc.
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Format the date as "19th August 2025"
  const currentDate = `${date.getDate()}${getOrdinalSuffix(
    date.getDate()
  )} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;

  const currentTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Handle manual slide change
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    // Reset the timer when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
  };

  // Navigate to next slide
  const nextSlide = () => {
    const nextIndex =
      activeIndex === slideData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    // Reset the timer when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
  };

  // Navigate to previous slide
  const prevSlide = () => {
    const prevIndex =
      activeIndex === 0 ? slideData.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
    // Reset the timer when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
  };

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Pause zoom animation
    if (zoomIntervalRef.current) {
      clearInterval(zoomIntervalRef.current);
    }
  };

  // Resume auto-slide when not hovering
  const handleMouseLeave = () => {
    setIsPaused(false);
    // Resume zoom animation
    zoomIntervalRef.current = setInterval(() => {
      setZoomLevel((prevZoom) => {
        if (prevZoom >= 110) {
          return 110; // Max zoom level
        }
        return prevZoom + 0.05; // Smooth zoom increment
      });
    }, 50);
  };

  return (
    <div className="container-fluid p-0">
      {/* hero section */}
      <section
        id="heroCarousel"
        className="carousel slide overflow-hidden"
        data-bs-ride="carousel"
        style={{
          backgroundImage: `url(${slideData[activeIndex].image})`,
          backgroundSize: `${zoomLevel}%`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-size 0.5s ease-out", // Smooth transition for zoom
        }}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <div className="bar"></div>
        <div className="container">
          <div className="carousel-indicators-container position-absolute end-0 start-0">
            <div className="container">
              <div className="carousel-arrows position-relative d-flex flex-column justify-content-end align-items-end gap-3">
                <button
                  className="arrow-btn border-0 rounded-circle d-flex align-items-center justify-content-center"
                  onClick={prevSlide}
                >
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button
                  className="arrow-btn border-0 rounded-circle d-flex align-items-center justify-content-center"
                  onClick={nextSlide}
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>

              <div className="carousel-indicators justify-content-end">
                {slideData.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to={index}
                    className={index === activeIndex ? "active" : ""}
                    aria-current={index === activeIndex ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => handleSelect(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <div className="carousel-inner">
            {slideData.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <section className="hero-slide vh-100 d-flex align-items-center position-relative">
                  <div className="container position-relative z-index-2 text-white text-start">
                    <div className="row">
                      <div className="col-12 col-md-8">
                        <p className="mb-4">
                          <span className="bg-dark opacity-50 text-white p-3">
                            {slide.subTitle}
                          </span>
                        </p>
                        <h1 className="display-1 mb-3 fw-bold">
                          {slide.title}
                        </h1>
                        <button className="btn btn-lg button fw-bold rounded-0 px-3 py-3 text-white position-relative overflow-hidden">
                          {slide.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between text-light opacity-75">
                    <div className="d-flex align-items-center gap-2">
                      <span
                        className="bg-light text-dark rounded-circle"
                        style={{ padding: "8px 11px" }}
                      >
                        <i className="bi bi-calendar2-day-fill"></i>
                      </span>
                      <span>TODAY: {currentDate}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span
                        className="bg-light text-dark rounded-circle"
                        style={{ padding: "8px 11px" }}
                      >
                        <i className="bi bi-clock-fill"></i>
                      </span>
                      <span>TIME: {currentTime}</span>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list section */}
      <section className="custom-bg position-relative mt-4">
        <div
          className="department-bg"
          style={{
            backgroundImage: `url(${ServicesListbg})`,
          }}
        ></div>
        <div className="container">
          <div className="row py-5 d-flex justify-content-center g-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="col-12 col-md-2"
                style={{ minWidth: "250px" }}
              >
                <div className="card text-center shadow-sm border-0 rounded-0 h-100 overflow-hidden department-card">
                  <div className="card-body">
                    <span className="d-flex justify-content-center align-items-center z-1 position-relative rounded-circle department-icon">
                      <i
                        className={`bi ${service.icon} fs-1 z-2 highlight`}
                      ></i>
                    </span>
                    <h6 className="fw-bold department-title position-relative">
                      {service.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>{" "}
          <hr className="m-0" />
          <div className="text-center py-4">
            <p className="text-white m-0">
              Get our quick services from the municipal.{" "}
              <a
                href="#services"
                className="fw-bold text-white text-decoration-none"
              >
                View all services
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-5 govity-hero bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT COLUMN */}
            <div className="col-md-6 position-relative order-2 order-lg-1">
              <div className="hero-media position-relative overflow-hidden d-flex flex-column justify-content-start align-items-start">
                <img
                  src={AboutLargeimg}
                  style={{ height: "520px", width: "450px" }}
                  alt="Young person learning with headphones"
                  className="img-fluid  object-cover"
                />

                {/* Play Video button */}
                <div
                  className="video-link position-absolute z-2"
                  bis_skin_checked="1"
                >
                  <a
                    href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                    className="video-popup"
                    bis_skin_checked="1"
                  >
                    <div
                      className="video-icon position-relative d-flex align-items-center justify-content-center text-center text-white"
                      bis_skin_checked="1"
                    >
                      <span>
                        <i className="bi bi-play-fill fs-1"></i>
                      </span>
                      <i className="ripple"></i>
                    </div>
                  </a>
                </div>

                {/* Small secondary image */}
                <div className="secondary-photo position-absolute shadow overflow-hidden">
                  <img
                    src={AboutSmallimg}
                    alt="Speaker at balcony"
                    className="img-fluid w-100 h-100 object-cover"
                  />
                </div>

                {/* badge */}
                <div className="about-badge border-start border-success border-5 bg-white shadow p-4 d-flex align-items-center gap-3 z-2 position-relative">
                  <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                      />
                    </svg>
                  </div>
                  <div className="text-start">
                    <div className="text-muted fw-bold small mb-1">
                      President Office
                    </div>
                    <div className="fw-semibold">+12 (3456) 7890</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center order-1 order-lg-2">
              <span>
                <i className="bi bi-star-fill highlight"></i>
              </span>

              <small className="mb-2 highlight fw-semibold">
                WELCOME TO GOVITY
              </small>

              <h1 className="display-5 fw-bold mb-4">
                Meet Ideological leader for youth generation
              </h1>

              <p className="text-secondary mb-4">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words which don't slightly.
              </p>

              <div className="d-flex align-items-md-start align-items-center  gap-3 border-bottom pb-4 mb-4">
                <div className="rounded-3 d-inline-flex align-items-center justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-dark"
                    width="55"
                    height="55"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                </div>
                <h4 className="highlight text-start fw-semibold mb-0">
                  Great city & place to develop your career & business.
                </h4>
              </div>
              <p className="text-secondary mb-4">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words which don't slightly.
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-4 flex-wrap">
                <button className="btn btn-lg button fw-bold rounded-0 px-4 py-3 text-white position-relative overflow-hidden">
                  Discover More
                </button>
              </div>
            </div>
          </div>

          <div className="row pt-5 g-5">
            {aboutCards.map((c, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <article className="feature-card position-relative overflow-hidden shadow-sm">
                  <div style={{ height: "450px" }}>
                    <img
                      src={c.img}
                      className="w-100 feature-card-img object-cover h-100"
                      alt=""
                    />
                  </div>
                  <div className="feature-badge position-absolute bg-white shadow p-4 text-center">
                    <div className="icon-wrap rounded-circle position-absolute d-flex align-items-center justify-content-center">
                      <i className={`bi ${c.icon} fs-1 highlight`}></i>
                    </div>
                    <h4 className="mt-3 fw-bold">{c.title}</h4>
                    <h4 className="fw-bold">{c.subtitle}</h4>
                  </div>

                  <div
                    className="feature-content position-absolute text-center z-2"
                    bis_skin_checked="1"
                  >
                    <div
                      className="feature-content-top position-relative d-block p-4 custom-bg"
                      bis_skin_checked="1"
                    >
                      <span className="position-relative d-inline-block">
                        <i className={`bi ${c.icon} fs-1 text-white`}></i>
                      </span>
                      <h3 className="text-white fw-bold mt-3">
                        {c.title} <br /> {c.subtitle}
                      </h3>
                    </div>
                    <div
                      class="p-4 bg-white position-relative d-block"
                      bis_skin_checked="1"
                    >
                      <p class="">
                        Aliquam viverra arcu. Donec aliquet blandit enim.
                        Suspendisse id quam <br /> sed eros luctus sit ame.
                      </p>
                      <button className="btn btn-lg button fw-bold rounded-0 px-4 py-3 text-white position-relative overflow-hidden mb-2 mb-md-0">
                        Discover More
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="flex-grow-1 border-top" />
            <h6 className="text-uppercase text-muted mb-0 letter-sp-1 px-4">
              Our Partners & Supporters
            </h6>
            <div className="flex-grow-1 border-top" />
          </div>

          <div className="logos-wrapper mt-5 overflow-hidden w-100 position-relative">
            <div className="logos-track d-flex align-items-center">
              {logos.concat(logos).map((logo, idx) => (
                <div key={idx} className="logo-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="img-fluid px-3"
                    style={{ height: "100px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span>
              <i className="bi bi-star-fill highlight"></i>
            </span>
            <p className="text-uppercase small text-success mb-2">
              Latest News
            </p>
            <h2 className="fw-bold">
              Latest news & articles
              <br />
              from the blog
            </h2>
          </div>

          <div className="row g-4">
            {posts.map((p, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <article className="position-relative bg-white shadow-sm overflow-hidden">
                  {/* IMAGE */}
                  <div style={{ height: "260px", overflow: "hidden" }}>
                    <img
                      src={p.img}
                      alt=""
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* DATE BADGE */}
                  <div
                    className="position-absolute bg-success text-white text-center border-bottom border-light border-3 p-2"
                    style={{ top: "15px", left: "15px", minWidth: "48px" }}
                  >
                    <div className="fw-bold">{p.date}</div>
                    <div className="small">{p.month}</div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 text-start">
                    <div className="d-flex align-items-center mb-2 small text-muted">
                      <span className="me-3">
                        {" "}
                        <i class="bi bi-person-circle highlight"></i> {p.author}
                      </span>{" "}
                      |
                      <span className="ms-3">
                        <i class="bi bi-chat-right-text-fill highlight"></i>{" "}
                        {p.comments} Comments
                      </span>
                    </div>
                    <h4 className="fw-bold my-3 text-start">{p.title}</h4>
                    <hr />
                    <a
                      href="#"
                      className="w-100 text-decoration-none text-start text-muted"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
