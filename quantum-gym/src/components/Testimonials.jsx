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
                {[
                  {
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                    name: "Sarah M.",
                    text: "Quantum Gym completely transformed my life. The trainers are amazing, and the facilities are top-notch!",
                  },
                  {
                    img: "https://randomuser.me/api/portraits/men/32.jpg",
                    name: "John D.",
                    text: "I love the 24/7 access. I can train anytime I want. It’s the perfect gym for busy people like me.",
                  },
                  {
                    img: "https://randomuser.me/api/portraits/women/68.jpg",
                    name: "Emily R.",
                    text: "The group classes are so much fun, and I’ve made amazing friends here. Highly recommend Quantum Gym!",
                  },
                ].map((testimonial, index) => (
                  <div className="col-md-4 mb-3 d-flex" key={index}>
                    <div
                      className="card bg-light text-dark p-4 w-100 h-100 shadow rounded"
                      style={{ minHeight: "480px" }}
                    >
                      <div className="card-body d-flex flex-column">
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="rounded-circle mb-3 mx-auto border border-2 border-primary"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="mb-2 text-warning">
                          {"★".repeat(5)}
                        </div>
                        <p className="card-text flex-grow-1">
                          “{testimonial.text}”
                        </p>
                        <h5 className="card-title fw-bold mt-3">— {testimonial.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row justify-content-center align-items-stretch">
                {[
                  {
                    img: "https://randomuser.me/api/portraits/men/85.jpg",
                    name: "Alex T.",
                    text: "Amazing gym with fantastic staff. Clean, spacious, and motivating atmosphere.",
                  },
                  {
                    img: "https://randomuser.me/api/portraits/men/51.jpg",
                    name: "Michael B.",
                    text: "The best gym in town for powerlifting! Coaches really know their stuff.",
                  },
                  {
                    img: "https://randomuser.me/api/portraits/women/15.jpg",
                    name: "Laura K.",
                    text: "So glad I joined. Great community and world-class equipment.",
                  },
                ].map((testimonial, index) => (
                  <div className="col-md-4 mb-3 d-flex" key={index}>
                    <div
                      className="card bg-light text-dark p-4 w-100 h-100 shadow rounded"
                      style={{ minHeight: "480px" }}
                    >
                      <div className="card-body d-flex flex-column">
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="rounded-circle mb-3 mx-auto border border-2 border-primary"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="mb-2 text-warning">
                          {"★".repeat(5)}
                        </div>
                        <p className="card-text flex-grow-1">
                          “{testimonial.text}”
                        </p>
                        <h5 className="card-title fw-bold mt-3">— {testimonial.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
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
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
