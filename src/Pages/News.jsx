import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import contact from "../assets/Images/contact.jpg";
import { posts } from "../Constant/Data";

const News = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <div className="container-fluid p-0">
        {/* Banner Section */}
        <PageBanner title="News" subtitle="Latest updates and stories" />

        <section className="py-5">
          <div className="container">
            <div className="row gy-5">
              {posts.slice(0, visibleCount).map((p, i) => (
                <div className="col-12 col-md-6 col-lg-4" key={i}>
                  <article className="news-card card rounded-0 border-0 position-relative bg-white shadow-sm overflow-hidden d-flex flex-column h-100">
                    <div
                      className="news-card-img d-block position-relative z-1 overflow-hidden"
                      style={{ height: "260px" }}
                    >
                      <img
                        src={p.img}
                        alt=""
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div
                      className="position-absolute bg-success text-white text-center border-bottom border-light border-3 z-2 p-2"
                      style={{ top: "15px", left: "15px", minWidth: "48px" }}
                    >
                      <div className="fw-bold">{p.date}</div>
                      <div className="small">{p.month}</div>
                    </div>

                    <div className="p-4 text-start flex-grow-1 d-flex flex-column">
                      <div className="d-flex align-items-center mb-2 small text-muted">
                        <span className="me-3">
                          {" "}
                          <i className="bi bi-person-circle highlight"></i>{" "}
                          {p.author}
                        </span>{" "}
                        |
                        <span className="ms-3">
                          <i className="bi bi-chat-right-text-fill highlight"></i>{" "}
                          {p.comments} Comments
                        </span>
                      </div>
                      <h4 className="fw-bold my-3 text-start">{p.title}</h4>
                      <a
                        href="#"
                        className="w-100 border-top pt-3 text-decoration-none text-start text-muted mt-auto"
                      >
                        Read More →
                      </a>
                    </div>
                  </article>
                </div>
              ))}

              {visibleCount < posts.length && (
                <div className="col-12 d-flex justify-content-center mt-5">
                  <button
                    onClick={handleLoadMore}
                    className="btn btn-lg button fw-bold rounded-0 px-3 py-2 text-white position-relative overflow-hidden"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
