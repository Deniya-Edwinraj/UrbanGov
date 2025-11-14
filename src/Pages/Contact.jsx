import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import contact from "../assets/Images/contact.jpg";

const patterns = {
  name: /^[A-Za-zÀ-ÖØ-öø-ÿ.'\- ]{2,60}$/, // 2–60 letters/spaces/'/-
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, // simple robust email
  message: /^(?=.*\S).{10,1000}$/, // 10+ chars, not all spaces
};

const messages = {
  name: "Please enter 2–60 letters (you can use spaces, apostrophes, or hyphens).",
  email: "Please enter a valid email address (e.g., name@example.com).",
  message: "Message must be at least 10 characters.",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateField = (field, value) => {
    if (!value) return "This field is required.";
    if (!patterns[field].test(value)) return messages[field];
    return "";
  };

  const validateForm = (draft = form) => {
    const nextErrors = {
      name: validateField("name", draft.name),
      email: validateField("email", draft.email),
      message: validateField("message", draft.message),
    };
    setErrors(nextErrors);
    return Object.values(nextErrors).every((e) => e === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...form, [name]: value };
    setForm(next);

    // live-validate the field that changed
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, form[name]) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = validateForm();
    setTouched({ name: true, email: true, message: true });

    if (!ok) return; // block submit if invalid

    // TODO: send it somewhere (emailjs / API)
    console.log("Submitted:", form);
  };

  const classWithState = (base, field) =>
    `${base} ${
      touched[field] ? (errors[field] ? "is-invalid" : "is-valid") : ""
    }`;

  const formIsValid =
    Object.values(errors).every((e) => e === "") &&
    Object.values(form).every((v) => v.trim() !== "");

  return (
    <>
      <div className="container-fluid p-0">
        {/* Banner Section */}
        <PageBanner title="Contact Us" subtitle="Get in touch" />

        {/* Contact Info */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="position-relative d-block ms-4">
                  <div className="contact-img-box position-relative d-block">
                    <div className="contact-img position-relative d-block">
                      <img src={contact} alt="contact" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4 mt-md-0">
                <div className="text-uppercase fw-semibold text-secondary small d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                  <span className="highlight">★</span>
                  <span>UrbanGov</span>
                </div>
                <h1 className="fw-bold display-5 text-center text-md-start">
                  Get in touch now
                </h1>
                <p className="text-secondary text-center text-md-start">
                  UrbanGov is built on collaboration. Share your ideas, report
                  an issue, or connect with us to create smarter digital
                  solutions for citizens.
                </p>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i className="bi bi-telephone-fill highlight fs-4"></i>
                  </div>

                  <div className="text-start">
                    <p className="mb-0 text-secondary small">
                      Have any Question?
                    </p>
                    <h6 className="mb-0 fw-bold">+12 (3456) 7890</h6>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i className="bi bi-envelope-fill highlight fs-4"></i>
                  </div>
                  <div className="text-start">
                    <p className="mb-0 text-secondary small">Write Email</p>
                    <h6 className="mb-0 fw-bold">info@urbangov.com</h6>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i className="bi bi-geo-alt-fill highlight fs-4"></i>
                  </div>
                  <div className="text-start">
                    <p className="mb-0 text-secondary small">Visit Anytime</p>
                    <h6 className="mb-0 fw-bold">UrbanGov</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section style={{ height: "500px" }}>
          <iframe
            title="Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873483.4363676092!2d120.22791728740302!3d31.21949169615782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f53c33%3A0x295129423c364a1!2sShanghai%2C%20China!5e0!3m2!1sen!2slk!4v1762100236821!5m2!1sen!2slk"
            width="100%"
            className="h-100 w-100"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>

        {/* Contact Section */}
        <section>
          <div
            className="container pt-5 bg-white d-flex flex-column align-items-center position-relative"
            style={{ top: "-100px" }}
          >
            {/* Top label */}
            <div className="text-uppercase fw-semibold letter-1 text-secondary small d-flex align-items-center gap-2 mb-2">
              <span className="highlight" aria-hidden="true">
                ★
              </span>
              <span>Contact Us</span>
            </div>

            {/* Big title */}
            <h1
              className="display-5 fw-bold text-center mb-4"
              style={{ maxWidth: 960 }}
            >
              Feel free to get in touch
              <br className="d-none d-md-block" /> with
              <span className="highlight ms-2">UrbanGov</span>
            </h1>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-100"
              style={{ maxWidth: 1040 }}
              noValidate
            >
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <input
                    className={classWithState(
                      "form-control bg-light rounded-0 border-0 p-3",
                      "name"
                    )}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby="nameHelp"
                  />
                  {touched.name && errors.name && (
                    <div id="nameHelp" className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <input
                    className={classWithState(
                      "form-control bg-light rounded-0 border-0 p-3",
                      "email"
                    )}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby="emailHelp"
                  />
                  {touched.email && errors.email && (
                    <div id="emailHelp" className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="col-12">
                  <textarea
                    className={classWithState(
                      "form-control bg-light rounded-0 border-0 p-3",
                      "message"
                    )}
                    name="message"
                    placeholder="Write Comment"
                    rows="5"
                    style={{ resize: "vertical" }}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby="msgHelp"
                  />
                  {touched.message && errors.message && (
                    <div id="msgHelp" className="invalid-feedback">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div className="col-12 d-flex justify-content-center mt-5">
                  <button className="btn btn-lg button fw-bold rounded-0 px-3 py-2 text-white position-relative overflow-hidden">
                    {" "}
                    Report an Issue{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
