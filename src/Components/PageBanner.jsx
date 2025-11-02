import React from "react";
import { Link } from "react-router-dom";

const PageBanner = ({ title, subtitle }) => {
  return (
    <section className="page-banner d-flex align-items-center justify-content-center position-relative">
      <div className="container d-flex flex-column align-items-center justify-content-center text-center text-white">
        <h1 className="display-2 fw-bold">{title}</h1>
        <p className="lead">
          <Link to="/" className="text-white text-decoration-none">
            Home
          </Link>
          {" / "}
          {title}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
