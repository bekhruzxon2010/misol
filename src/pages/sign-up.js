import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // ❗ sign-up sahifasida Navbar chiqmasin
  if (router.pathname === "/sign-up") {
    return null;
  }

  const handleClick = () => {
    router.push("/game");
  };

  const handleSelect = (e) => {
    const value = e.target.value;

    if (value !== "") {
      router.push(value);
    }
  };

  const handleSearch = () => {
    alert("Qidirilgan so‘z: " + search);
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "blue",
        padding: "5px",
        alignItems: "center",
      }}
    >
      <Image
        style={{ borderRadius: "100px" }}
        src={"/dental logo.png"}
        width={70}
        height={70}
        alt="Logo"
      />

      {/* Search */}
      <div style={{ marginLeft: "50px", flexGrow: 1 }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Qidiruv..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              width: "250px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              padding: "10px 20px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Qidirish
          </button>
        </div>
      </div>

      {/* SignUp Button */}
      <button
        onClick={handleClick}
        style={{
          padding: "13px 20px",
          background: "blue",
          color: "white",
          borderRadius: "5px",
          borderColor: "white",
          marginRight: "20px",
        }}
      >
        SignUp
      </button>

      {/* Select Menu */}
      <select
        onChange={handleSelect}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid white",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        <option value="">Bo‘lim tanlang</option>
        <option value="/service">Services</option>
        <option value="/doctor">Shifokorlar</option>
        <option value="/profile">Profile sahifa</option>
      </select>
    </div>
  );
}
