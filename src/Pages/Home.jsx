import React from "react";
import HeroImg from "../assets/hero1.jpg";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      {/* hero section */}
      <section
        id="heroCarousel"
        className="carousel slide overflow-hidden"
        data-bs-ride="carousel"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bar"></div>
        <div className="container">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <section className="hero-slide vh-100 d-flex align-items-center position-relative">
                <div className="container position-relative z-index-2 text-white text-start">
                  <div className="row">
                    <div className="col-12 col-lg-8 col-xxl-7">
                      <p className="mb-3 opacity-75">
                        <span>2 Million Visitors Every Year</span>
                      </p>

                      <h1 className="display-4 mb-3 fw-bold">
                        Safest City in <br /> the World.
                      </h1>

                      <button className="btn btn-lg button fw-bold rounded-0 px-3 py-3 text-white position-relative overflow-hidden">
                        Discover More
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
                    <span>TODAY: 32 °C</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="bg-light text-dark rounded-circle"
                      style={{ padding: "8px 11px" }}
                    >
                      <i className="bi bi-clock-fill"></i>
                    </span>
                    <span>TIME: 09:28 PM</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
