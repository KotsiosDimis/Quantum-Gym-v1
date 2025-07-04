import React from "react";
import Facilities from "../components/Facilities";
import Coaches from "../components/Coaches";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="section text-light text-center d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "var(--primary)",
          minHeight: "50vh",
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">About Quantum Gym</h1>
          <p className="lead">Smarter training. Better results.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-light text-dark py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Our Mission</h2>
          <p className="text-center mx-auto" style={{ maxWidth: "800px" }}>
            At Quantum Gym, we believe fitness is for everyone. Our mission is
            to empower people of all fitness levels to achieve their goals with
            cutting-edge equipment, expert trainers, and a supportive community.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section
        className="section py-5"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <div className="container text-light text-center">
          <h2 className="fw-bold mb-4">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-dark rounded shadow">
                <h4>💪 Modern Equipment</h4>
                <p>Train with the latest, cutting-edge fitness machines.</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-dark rounded shadow">
                <h4>👩‍🏫 Expert Trainers</h4>
                <p>Certified professionals to guide every step of your journey.</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-dark rounded shadow">
                <h4>⏰ 24/7 Access</h4>
                <p>Workout any time—our gym never closes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <Coaches />

      {/* Facilities Carousel */}
      <Facilities />

      {/* Call-To-Action */}
      <section
        className="section text-light text-center py-5"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Join the Quantum Family Today!</h2>
          <p className="lead mb-4">
            Let our team help you achieve your fitness goals.
          </p>
          <a href="/contact" className="btn btn-light btn-lg">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
