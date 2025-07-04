import React from "react";

export default function Testimonials() {
  return (
    <section
      className="section section-testimonials text-light"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-4">What Our Members Say</h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row justify-content-center align-items-stretch">
                <div className="col-md-4 mb-3 d-flex">
                  <div className="card bg-light text-dark p-3 w-100 h-100">
                    <div className="card-body d-flex flex-column">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Sarah M."
                        className="rounded-circle mb-3 mx-auto"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                      <p className="card-text flex-grow-1">
                        “Quantum Gym completely transformed my life. The trainers
                        are amazing, and the facilities are top-notch!”
                      </p>
                      <h5 className="card-title fw-bold mt-3">— Sarah M.</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3 d-flex">
                  <div className="card bg-light text-dark p-3 w-100 h-100">
                    <div className="card-body d-flex flex-column">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="John D."
                        className="rounded-circle mb-3 mx-auto"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                      <p className="card-text flex-grow-1">
                        “I love the 24/7 access. I can train anytime I want. It’s
                        the perfect gym for busy people like me.”
                      </p>
                      <h5 className="card-title fw-bold mt-3">— John D.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row justify-content-center align-items-stretch">
                <div className="col-md-4 mb-3 d-flex">
                  <div className="card bg-light text-dark p-3 w-100 h-100">
                    <div className="card-body d-flex flex-column">
                      <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Emily R."
                        className="rounded-circle mb-3 mx-auto"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                      <p className="card-text flex-grow-1">
                        “The group classes are so much fun, and I’ve made amazing
                        friends here. Highly recommend Quantum Gym!”
                      </p>
                      <h5 className="card-title fw-bold mt-3">— Emily R.</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3 d-flex">
                  <div className="card bg-light text-dark p-3 w-100 h-100">
                    <div className="card-body d-flex flex-column">
                      <img
                        src="https://randomuser.me/api/portraits/men/85.jpg"
                        alt="Alex T."
                        className="rounded-circle mb-3 mx-auto"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                      <p className="card-text flex-grow-1">
                        “Amazing gym with fantastic staff. Clean, spacious, and
                        motivating atmosphere.”
                      </p>
                      <h5 className="card-title fw-bold mt-3">— Alex T.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
