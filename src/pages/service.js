import { useState } from "react";

export default function DentalServices() {
  const services = [
    {
      title: "Teeth Whitening",
      desc: "Professional whitening for a brighter, whiter smile.",
      longDesc:
        "Teeth whitening is a safe and effective cosmetic dental procedure designed to lighten the color of your teeth and remove stains caused by food, drinks, smoking, or aging.",
      img: "/dent.jpg",
    },
    {
      title: "Dental Implants",
      desc: "Permanent and natural-loo replacement for missing teeth.",
      longDesc:
        "Dental implants are titanium posts that replace missing teeth roots and support crowns that look and feel like natural teeth.",
      img: "/dent1.jpg",
    },
    {
      title: "Teeth Cleaning",
      desc: "Deep cleaning to remove plaque and tartar buildup.",
      longDesc:
        "Professional teeth cleaning removes harmful plaque and tartar buildup to prevent gum disease and cavities.",
      img: "/dent3.jpg",
    },
    {
      title: "Braces & Aligners",
      desc: "Straighten teeth with modern braces and invisible aligners.",
      longDesc:
        "Braces and aligners help correct misaligned teeth, improve your bite, and enhance your smile using modern orthodontic methods.",
      img: "/dent4.jpg",
    },
    {
      title: "Root Canal",
      desc: "Save and repair badly damaged or infected teeth.",
      longDesc:
        "A root canal treatment removes infected pulp from a tooth, relieves pain, and prevents further damage.",
      img: "/dent5.jpg",
    },
    {
      title: "Dental Checkup",
      desc: "Comprehensive oral examination for a healthy smile.",
      longDesc:
        "Regular dental checkups help detect early signs of dental issues and maintain long-term oral health.",
      img: "/dent6.jpg",
    },
  ];

  const [selected, setSelected] = useState(null);

  const openCard = (item) => {
    setSelected(item);
  };

  const backToAll = () => {
    setSelected(null);
  };

  return (
    <div style={{ padding: "40px" }}>
      {/* Agar card tanlangan bo‘lsa — DETAIL PAGE */}
      {selected && (
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            width: "85%",
            margin: "auto",
            transition: "0.3s",
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
          }}
        >
          {/* Chap tomonda rasm */}
          <img
            src={selected.img}
            alt={selected.title}
            style={{
              width: "50%",
              height: "350px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          {/* O‘ng tomonda matn */}
          <div style={{ width: "50%" }}>
            <h1
              style={{
                color: "#0057b7",
                fontSize: "32px",
                marginBottom: "15px",
              }}
            >
              {selected.title}
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#444",
                lineHeight: "1.6",
              }}
            >
              {selected.longDesc}
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
              🔙 Back to all services
            </button>
          </div>
        </div>
      )}

      {/* Agar card tanlanmagan bo‘lsa — 6ta CARD GRID ko‘rinadi */}
      {!selected && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {services.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                textAlign: "center",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              onClick={() => openCard(item)} // bosganda card ochiladi
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h2 style={{ marginTop: "15px", color: "#0057b7" }}>
                {item.title}
              </h2>

              <p
                style={{ fontSize: "15px", color: "#555", marginTop: "8px" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
