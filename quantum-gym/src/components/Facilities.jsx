import React from "react";

export default function Facilities() {
  return (
    <section className="section p-0">
      <div
        id="facilitiesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "100vh" }}
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          {/* Slide 1 */}
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img
              src="/images/facility1.jpg"
              className="d-block w-100 h-100 object-fit-cover"
              alt="Cardio Zone"
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <h2 className="fw-bold display-4">Cardio Zone</h2>
              <p className="lead">
                Top-of-the-line treadmills, bikes, and more.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="/images/facility2.jpg"
              className="d-block w-100 h-100 object-fit-cover"
              alt="Strength Training"
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <h2 className="fw-bold display-4">Strength Training</h2>
              <p className="lead">
                Modern equipment for all your strength goals.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src="/images/facility3.jpg"
              className="d-block w-100 h-100 object-fit-cover"
              alt="Yoga Studio"
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <h2 className="fw-bold display-4">Yoga Studio</h2>
              <p className="lead">
                Peaceful and inspiring space for mindfulness.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#facilitiesCarousel"
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
          data-bs-target="#facilitiesCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
