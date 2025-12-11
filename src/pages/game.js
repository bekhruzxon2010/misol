import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // form tekshiruvi
    if (!name || !email || !pass) {
      setError("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    // barcha to‘g‘ri bo‘lsa → boshqa sahifaga o'tish
    router.push("/");
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign Up</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Parol"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>Ro‘yxatdan o‘tish</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#111",
    flexDirection: "column"
  },
  title: {
    color: "white",
    marginBottom: 20,
    fontSize: 32
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: 300
  },
  input: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    border: "1px solid #444",
    background: "#222",
    color: "white",
    fontSize: 16
  },
  button: {
    padding: 12,
    background: "#0d6efd",
    color: "white",
    fontSize: 18,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    marginTop: 10
  },
  error: {
    color: "red",
    marginBottom: 5,
    fontSize: 14
  }
};
