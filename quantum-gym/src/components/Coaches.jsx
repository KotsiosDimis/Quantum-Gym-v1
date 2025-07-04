import React from "react";

export default function Coaches() {
  const coaches = [
    {
      name: "John Power",
      specialty: "Strength & Conditioning",
      bio: "Helping clients achieve peak performance with tailored strength programs.",
      img: "/coaches/Savvas.jpg",
    },
    {
      name: "Emma Flex",
      specialty: "Yoga & Mobility",
      bio: "Passionate about improving flexibility and mindfulness through yoga.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Speed",
      specialty: "HIIT & Cardio",
      bio: "Focused on high-energy workouts that burn fat and build endurance.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="section bg-light py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Meet Our Coaches</h2>
        <div className="row justify-content-center">
          {coaches.map((coach, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 border-0 shadow">
                <img
                  src={coach.img}
                  className="card-img-top"
                  alt={coach.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{coach.name}</h5>
                  <p className="text-muted">{coach.specialty}</p>
                  <p className="card-text">{coach.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
