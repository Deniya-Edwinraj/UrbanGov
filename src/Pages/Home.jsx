import React, { useState, useEffect, useRef } from "react";
import ServicesListbg from "../assets/services-bg.png";
import { services, slideData } from "../Constant/Data";

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
    </div>
  );
};

export default Home;
