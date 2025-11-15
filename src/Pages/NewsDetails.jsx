import { useParams, Link } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { posts } from "../Constant/Data";
import Comment1 from "../assets/Images/comment1.jpeg";
import Comment2 from "../assets/Images/comment2.jpeg";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

// Build unique category list from posts
const categories = Array.from(new Set(posts.map((p) => p.category)));

const tags = ["Government", "Council"];

const commentsData = [
  {
    id: 1,
    name: "Kevin martin",
    text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
    avatar: Comment1,
  },
  {
    id: 2,
    name: "Sarah albert",
    text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
    avatar: Comment2,
  },
];

const NewsDetails = () => {
  const { title } = useParams();

  const post = posts.find(
    (p) => title === p.title.toLowerCase().replace(/\s+/g, "-")
  );

  if (!post) return <h3 className="text-center mt-5">Post Not Found</h3>;

  const activeCategory = post.category;

  return (
    <>
      <div className="container-fluid p-0">
        {/* Banner Section */}
        <PageBanner title="News Details" subtitle={post.title} />

        <section className="py-5">
          <div className="container">
            <div className="row gy-5">
              {/* LEFT: Main Article */}
              <div className="col-lg-8">
                <article>
                  <div className="position-relative mb-4">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-100"
                      style={{ maxHeight: "420px", objectFit: "cover" }}
                    />
                    <div
                      className="position-absolute bg-success text-white text-center px-3 py-2 border-bottom border-light border-3"
                      style={{ top: "20px", right: "20px" }}
                    >
                      <div className="fw-bold">{post.date}</div>
                      <div className="small text-uppercase">{post.month}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-center justify-content-md-start small text-muted mb-3 flex-wrap gap-2">
                    <span className="me-4 d-flex align-items-center">
                      <i className="bi bi-person-circle me-1 text-success"></i>
                      By {post.author}
                    </span>
                    <span className="d-flex align-items-center">
                      <i className="bi bi-chat-right-text-fill me-1 text-success"></i>
                      {post.comments} Comments
                    </span>
                  </div>

                  <h2 className="fw-bold text-center text-md-start mb-3">
                    {post.title}
                  </h2>

                  {Array.isArray(post.description) ? (
                    post.description.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-muted text-center text-md-start mb-3"
                      >
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-muted text-center text-md-start">
                      {post.description ||
                        post.content ||
                        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. Replace this text with the real content from your data source."}
                    </p>
                  )}

                  {/* Tags / Social / Cards / Comments */}
                  <div className="mt-5 pt-4 border-top">
                    {/* TAGS */}
                    <div className="d-flex justify-content-center justify-content-md-between align-items-center flex-wrap gap-3 mb-4">
                      <div className="d-flex align-items-center flex-wrap gap-2">
                        <h5 className="fw-bold me-2">Tags:</h5>
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="badge rounded-0 px-3 py-2 bg-success fs-6 text-white fw-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Social icons */}
                      <div className="d-flex align-items-center gap-2">
                        <button
                          type="button"
                          className="btn rounded-circle border-0 bg-light d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className="bi bi-twitter"></i>
                        </button>
                        <button
                          type="button"
                          className="btn rounded-circle border-0 bg-light d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className="bi bi-facebook"></i>
                        </button>
                        <button
                          type="button"
                          className="btn rounded-circle border-0 bg-light d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className="bi bi-pinterest"></i>
                        </button>
                        <button
                          type="button"
                          className="btn rounded-circle border-0 bg-light d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className="bi bi-instagram"></i>
                        </button>
                      </div>
                    </div>

                    {/* Two cards row */}
                    <div className="row g-3 mb-5">
                      <div className="col-md-6">
                        <div className="p-4 bg-light h-100 d-flex align-items-center justify-content-center">
                          <p className="mb-0 fw-semibold">
                            Everyone should live once
                            <br />
                            in a smart city
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-4 bg-success h-100 d-flex align-items-center justify-content-center">
                          <p className="mb-0 fw-semibold text-white">
                            The best city in world with
                            <br />
                            amazing art &amp; culture
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* COMMENTS */}
                    <div className="pt-4 border-top">
                      <h4 className="fw-bold mb-4 text-center text-lg-start">
                        {commentsData.length} comments
                      </h4>

                      {commentsData.map((c) => (
                        <div
                          key={c.id}
                          className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start pb-4 mb-4 border-bottom text-center text-md-start"
                        >
                          <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start w-100">
                            <div className="me-md-3 mb-3 mb-md-0">
                              <img
                                src={c.avatar}
                                alt={c.name}
                                className="rounded-circle"
                                style={{
                                  width: "90px",
                                  height: "90px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <div>
                              <h6 className="fw-bold mb-1">{c.name}</h6>
                              <p className="mb-0 text-muted">{c.text}</p>
                            </div>
                          </div>

                          {/* Reply Button */}
                          <div className="mt-3 mt-md-0">
                            <button className="btn btn-dark rounded-0 px-4 py-2 mx-auto d-block d-md-inline">
                              Reply
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>

              {/* RIGHT: Sidebar */}
              <div className="col-lg-4">
                <aside>
                  {/* Search box */}
                  <div className="mb-4">
                    <form className="position-relative">
                      <input
                        type="text"
                        className="form-control text-white rounded-0 custom-bg py-3 pe-5 custom-placeholder"
                        placeholder="Search here"
                      />
                      <button
                        type="submit"
                        className="btn border-0 position-absolute top-50 end-0 translate-middle-y me-2 custom-bg"
                      >
                        <i className="bi bi-search text-white"></i>
                      </button>
                    </form>
                  </div>

                  {/* Latest posts */}
                  <div className="bg-light p-4 mb-4">
                    <h5 className="fw-bold mb-4">Latest posts</h5>

                    {posts.slice(0, 4).map((item, idx) => (
                      <div
                        className={`d-flex align-items-center ${
                          idx !== posts.slice(0, 4).length - 1 ? "mb-3" : ""
                        }`}
                        key={idx}
                      >
                        <div
                          className="flex-shrink-0 me-3"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="flex-grow-1 text-start">
                          <div className="small text-muted mb-1">
                            <i className="bi bi-person-circle text-success me-1"></i>
                            By {item.author}
                          </div>
                          <Link
                            to={`/news/${slugify(item.title)}`}
                            className="text-decoration-none text-dark"
                          >
                            <p className="mb-0 small fw-medium">{item.title}</p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Categories block */}
                  <div className="mt-5 bg-light p-4">
                    <h5 className="fw-bold mb-4">Categories</h5>
                    <ul className="list-unstyled mb-0">
                      {categories.map((cat) => {
                        const isActive = cat === activeCategory;
                        return (
                          <li key={cat} className="mb-2">
                            <button
                              type="button"
                              className="w-100 border-0 bg-transparent p-0 text-start"
                            >
                              <div
                                className={`d-flex align-items-center justify-content-between px-3 py-2 ${
                                  isActive ? "bg-white shadow-sm" : ""
                                }`}
                              >
                                <span
                                  className={
                                    isActive ? "text-dark" : "text-muted"
                                  }
                                >
                                  {cat}
                                </span>
                                {isActive && (
                                  <span className="text-success">
                                    <i className="bi bi-arrow-right"></i>
                                  </span>
                                )}
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* LEAVE A COMMENT FORM */}
                  <div className="mt-5 bg-light p-4">
                    <h4 className="fw-bold mb-4">Leave a comment</h4>

                    <form>
                      <div className="row g-3 mb-3">
                        <div>
                          <input
                            type="text"
                            className="form-control border-0 bg-white rounded-0 py-3"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            className="form-control border-0 bg-white rounded-0 py-3"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <textarea
                          rows="4"
                          className="form-control border-0 bg-white rounded-0 py-3"
                          placeholder="Write Comment"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn bg-success text-white rounded-0 px-5 py-3 fw-semibold"
                      >
                        Submit Comment
                      </button>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsDetails;
