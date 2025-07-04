import React from "react";

export default function ContactForm() {
  return (
    <div className="text-center">
      <h3 className="fw-bold mb-3">Send Us a Message</h3>
      <form className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control text-center"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control text-center"
            id="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control text-center"
            id="message"
            rows="4"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}
