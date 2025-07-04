import React from "react";
import Testimonials from "../components/Testimonials";
import FeatureCarousel from "../components/FeatureCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="section section-hero text-light d-flex flex-column justify-content-center align-items-center text-center"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold">Welcome to Quantum Gym</h1>
          <p className="lead">Smarter training. Better results. Join us today.</p>
          <a href="/contact" className="btn btn-light btn-lg mt-3">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <FeatureCarousel />

      {/* Testimonials Slider */}
      <Testimonials />

      {/* Call-To-Action Section */}
      <section
        className="section text-light d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage: "url('/images/cta-background.jpg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "400px", // Adjust height if needed
        }}
      >
        <div
          className="bg-dark bg-opacity-50 p-4 rounded"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="fw-bold">Ready to Transform Your Body?</h2>
          <p>Sign up today and take the first step toward your fitness goals!</p>
          <a href="/contact" className="btn btn-light btn-lg mt-2">
            Join Quantum Gym
          </a>
        </div>
      </section>

    </>
  );
}
