import React from "react";

export default function FeatureCarousel() {
  const features = [
    {
      title: "Professional Equipment",
      description:
        "Train with state-of-the-art machines and free weights designed for all levels of fitness.",
      img: "/images/features/equipment.jpg", // Replace with your actual image path
    },
    {
      title: "World-Class Coaches",
      description:
        "Our certified coaches include athletes and professionals who can guide you every step of the way.",
      img: "/images/features/coaches.jpg", // Replace with your actual image path
    },
    {
      title: "Vibrant Community",
      description:
        "Join a supportive and motivated community of like-minded individuals.",
      img: "/images/features/community.jpg", // Replace with your actual image path
    },
  ];

  return (
    <section className="section p-0">
      <div
        id="featureCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {features.map((feature, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
              style={{ height: "100vh", width: "100vw" }}
            >
              <img
                src={feature.img}
                className="d-block"
                alt={feature.title}
                style={{
                  height: "100vh",        // Full height of viewport
                  width: "100vw",         // Full width of viewport
                  objectFit: "cover",     // Cover entire area
                  objectPosition: "center",
                }}
              />
              <div
                className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3"
                style={{
                  bottom: "20%",
                  backdropFilter: "blur(3px)",
                }}
              >
                <h3 className="fw-bold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#featureCarousel"
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
          data-bs-target="#featureCarousel"
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
