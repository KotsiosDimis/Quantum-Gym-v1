import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3">
      <div className="container">
        <div className="row">
          {/* Gym Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quantum Gym</h5>
            <p>Your home for powerlifting, world-class coaching, and a vibrant community.</p>
            <p className="mb-0">📍 Παστερ 6, Αγιος Αντωνιος, 1055 Nicosia, Cyprus</p>
            <p className="mb-0">📞 <a href="tel:+35722777724" className="text-light text-decoration-none">+357 22 777724</a></p>
            <p>📧 <a href="mailto:Quantum.Gym@outlook.com" className="text-light text-decoration-none">Quantum.Gym@outlook.com</a></p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/join" className="text-light text-decoration-none">Join Now</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div>
              <a href="#" className="btn btn-outline-light btn-sm me-2 mb-2" aria-label="Facebook">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="#" className="btn btn-outline-light btn-sm me-2 mb-2" aria-label="Instagram">
                <i className="bi bi-instagram"></i> Instagram
              </a>
              <a href="#" className="btn btn-outline-light btn-sm mb-2" aria-label="TikTok">
                <i className="bi bi-tiktok"></i> TikTok
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center small mb-0">&copy; 2025 Quantum Gym. All rights reserved.</p>
      </div>
    </footer>
  );
}
