import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-to-top custom-bg ${
        visible ? "show" : ""
      } d-flex align-items-center justify-content-center position-fixed back-light rounded-0 z-2`}
      onClick={scrollToTop}
    >
      <i class="bi bi-chevron-up  text-white"></i>
                            <i className="ripple"></i>

    </div>
  );
};

export default BackToTop;