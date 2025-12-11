import { useState } from "react";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Olivia Smith",
      position: "Orthodontist",
      shortInfo: "Specialist in braces and teeth alignment.",
      longInfo:
        "Dr. Olivia Smith is an experienced orthodontist who has helped thousands of patients achieve perfect smiles using modern braces and invisible aligners.",
      img: "/doctor.jpg",
    },
    {
      name: "Dr. Ethan Johnson",
      position: "Dental Surgeon",
      shortInfo: "Expert in tooth extraction and oral surgery.",
      longInfo:
        "Dr. Ethan Johnson performs complex dental surgeries, including wisdom tooth extractions and dental implants, with precision and care.",
      img: "/doc2.jpg",
    },
    {
      name: "Dr. Mia Williams",
      position: "Pediatric Dentist",
      shortInfo: "Kids' dental care specialist.",
      longInfo:
        "Dr. Mia Williams is loved by kids and parents alike for her friendly approach and expert pediatric dental care.",
      img: "/doc3.jpg",
    },
    {
      name: "Dr. Noah Brown",
      position: "Implantologist",
      shortInfo: "Dental implants and restoration expert.",
      longInfo:
        "With over 12 years of experience, Dr. Noah provides long-lasting and natural-looking dental implants using the latest technology.",
      img: "/doc4.jpg",
    },
    {
      name: "Dr. Ava Davis",
      position: "Cosmetic Dentist",
      shortInfo: "Smile makeover specialist.",
      longInfo:
        "Dr. Ava Davis focuses on teeth whitening, veneers, and smile design to help patients achieve their dream smile.",
      img: "/doc5.jpg",
    },
    {
      name: "Dr. Liam Miller",
      position: "General Dentist",
      shortInfo: "Regular dental checkups & treatment.",
      longInfo:
        "Dr. Liam Miller provides professional cleanings, fillings, and preventive dental care for patients of all ages.",
      img: "/doc6.jpg",
    },
  ];

  const [selected, setSelected] = useState(null);

  const openDoctor = (doc) => {
    setSelected(doc);
  };

  const backToAll = () => {
    setSelected(null);
  };

  return (
    <div style={{ padding: "40px" }}>
      {/* DETAIL QISMI */}
      {selected && (
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            width: "85%",
            margin: "auto",
            display: "flex",
            gap: "30px",
          }}
        >
          {/* Chap tomonda rasm */}
          <img
            src={selected.img}
            alt={selected.name}
            style={{
              width: "45%",
              height: "350px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          {/* O'ng tomonda ma'lumot */}
          <div style={{ width: "50%" }}>
            <h1 style={{ color: "#0057b7", fontSize: "32px" }}>
              {selected.name}
            </h1>
            <h3
              style={{ marginTop: "10px", color: "#333", fontSize: "20px" }}
            >
              {selected.position}
            </h3>

            <p
              style={{
                marginTop: "15px",
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#444",
              }}
            >
              {selected.longInfo}
            </p>

            <button
              onClick={backToAll}
              style={{
                marginTop: "25px",
                padding: "12px 25px",
                background: "#0057b7",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              🔙 Back to Doctors
            </button>
          </div>
        </div>
      )}

      {/* Cards qismi */}
      {!selected && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {doctors.map((doc, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                textAlign: "center",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={() => openDoctor(doc)}
            >
              <img
                src={doc.img}
                alt={doc.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h2 style={{ marginTop: "15px", color: "#0057b7" }}>
                {doc.name}
              </h2>

              <h4 style={{ color: "#333", marginTop: "5px" }}>
                {doc.position}
              </h4>

              <p style={{ color: "#555", marginTop: "10px" }}>
                {doc.shortInfo}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
