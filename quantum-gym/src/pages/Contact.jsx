import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      {/* Contact Details & Form */}
      <section className="section bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/contact/Ask_me.JPG" // Replace with your own image
                alt="Quantum Gym"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Side - Contact Details + Form */}
            <div className="col-lg-6">
              {/* Come Train With Us */}
              <div className="mb-5 text-center">
                <h2 className="fw-bold mb-3">Come Train With Us</h2>
                <p className="mx-auto" style={{ maxWidth: "500px" }}>
                  No pressure, no charge. Drop by anytime — we’ll give you a tour, let you try out the equipment for free, and you can ask us anything about your fitness journey.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mb-5">
                <div className="p-4   text-center">
                  <h3 className="fw-bold mb-4">Contact Information</h3>

                  <div className="mb-3">
                    📞{" "}
                    <a href="tel:+35722777724" className="text-dark text-decoration-none fw-semibold">
                      +357 22 777724
                    </a>
                  </div>

                  <div className="mb-3">
                    📧{" "}
                    <a href="mailto:Quantum.Gym@outlook.com" className="text-dark text-decoration-none fw-semibold">
                      Quantum.Gym@outlook.com
                    </a>
                  </div>

                  <div className="mb-3">
                    📍{" "}
                    <span className="fw-semibold">
                      Παστερ 6, Αγιος Αντωνιος, 1055 Nicosia, Cyprus
                    </span>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-5 text-center">
                <h4 className="fw-bold mb-3">Opening Hours</h4>
                <ul className="list-unstyled mx-auto" style={{ maxWidth: "300px" }}>
                  <li>Monday: <span className="text-muted">6:30 AM - 10:00 PM</span></li>
                  <li>Tuesday: <span className="text-muted">6:30 AM - 10:00 PM</span></li>
                  <li>Wednesday: <span className="text-muted">6:30 AM - 10:00 PM</span></li>
                  <li>Thursday: <span className="text-muted">6:30 AM - 10:00 PM</span></li>
                  <li>Friday: <span className="text-muted">6:30 AM - 10:00 PM</span></li>
                  <li>Saturday: <span className="text-muted">9:00 AM - 5:00 PM</span></li>
                  <li>Sunday: <span className="text-danger fw-bold">CLOSED</span></li>
                </ul>
              </div>
            </div>



          </div>
        </div>
      </section>



      {/* Google Map Fullscreen */}
      <section className="section p-0" style={{ height: "100vh" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <iframe
            title="Quantum Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.295730482343!2d-122.42067938468138!3d37.77851997975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3d2b0b69%3A0x4d8d7f5f1a6325af!2sFitness+Gym!5e0!3m2!1sen!2sus!4v1628571123456!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
