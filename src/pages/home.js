import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const goToPage = () => {
    router.push("/game");
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      
      {/* 🔵 Floating Teeth Animation KEYFRAME */}
      <style>{`
        @keyframes floatTooth {
          0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
        }
      `}</style>

      {/* 🦷 100 TA TISH ANIMATSIYASI */}
      {[...Array(100)].map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            fontSize: `${Math.random() * 25 + 15}px`,
            left: `${Math.random() * 100}%`,
            animation: `floatTooth ${Math.random() * 10 + 8}s linear infinite`,
            opacity: 0.8,
            top: `${Math.random() * 100}%`,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          🦷
        </span>
      ))}

      {/* Asosiy kontent */}
      <div style={{ position: "relative", zIndex: 10, marginTop: "50px" }}>
        <Image
          style={{
            marginLeft: "580px",
            borderRadius: "100px",
            marginTop: "50px",
          }}
          src={"/dental logo.png"}
          width={200}
          height={200}
          alt="Dental Logo"
        />

        <h1
          style={{
            fontSize: "70px",
            textAlign: "center",
            color: "red",
            textShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          Apex Dent
        </h1>

        <p
          style={{
            color: "red",
            fontSize: "30px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          A healthy smile starts with good dental care.
        </p>

        <div style={{ padding: "40px", textAlign: "center" }}>
          <button
            onClick={goToPage}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              padding: "15px 35px",
              background: hover ? "green" : "red",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "0.3s",
              fontSize: "20px",
              boxShadow: hover
                ? "0 8px 20px rgba(0, 200, 83, 0.5)"
                : "0 8px 20px rgba(255,0,0,0.5)",
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
