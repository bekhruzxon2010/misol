import React from "react";

const styles = {
  footer: {
    background: "blue",
    color: "#fff",
    padding: "40px 0 20px",
    fontFamily: "Arial, sans-serif",
    marginTop: "40px"
  },
  container: {
    width: "90%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px"
  },
  section: {
    flex: 1,
    minWidth: "220px"
  },
  title: {
    marginBottom: "15px",
    fontSize: "20px",
    borderBottom: "2px solid #fff",
    paddingBottom: "5px"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    margin: "8px 0"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    opacity: 0.8
  },
  linkHover: {
    opacity: 1
  },
  bottom: {
    textAlign: "center",
    marginTop: "30px",
    borderTop: "1px solid rgba(255,255,255,0.4)",
    paddingTop: "15px",
    opacity: 0.85
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div style={styles.section}>
          <h3 style={styles.title}>Klinika haqida</h3>
          <p>Biz zamonaviy stomatologiya xizmatlarini taqdim etamiz. Sifat va ishonch biz uchun muhim.</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.title}>Bo‘limlar</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><a style={styles.link} href="#">Asosiy</a></li>
            <li style={styles.listItem}><a style={styles.link} href="/service">Xizmatlar</a></li>
            <li style={styles.listItem}><a style={styles.link} href="/doctor">Shifokorlar</a></li>
            <li style={styles.listItem}><a style={styles.link} href="#">Aloqa</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.title}>Aloqa</h3>
          <p>📍 Jizzax</p>
          <p>📞 +998 94 055 88 89</p>
          <p>✉️ info@stomclinic.uz</p>
        </div>

      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} StomClinic — Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
