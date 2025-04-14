import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif" }}>
      {/* Home Section */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Добредојдовте во Месара Боно
        </motion.h1>
        <motion.a href="#catalog" whileHover={{ scale: 1.1 }} style={{ backgroundColor: "#8b0000", padding: "1rem 2rem", borderRadius: "999px", color: "#fff", fontWeight: "600", textDecoration: "none" }}>
          Види Каталог
        </motion.a>
      </section>

      {/* Catalog Section */}
      <section id="catalog" style={{ padding: "4rem 1.5rem", backgroundImage: "url('https://images.unsplash.com/photo-1604186837225-6f9b3f3e5a4b')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
          Каталог
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.05 }} style={{ backgroundColor: "#fff", color: "#000", borderRadius: "0.75rem", overflow: "hidden" }}>
              <img src={`https://source.unsplash.com/300x200/?meat&sig=${item}`} alt="Product" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Производ {item}</h3>
                <p style={{ fontSize: "0.9rem" }}>Краток опис на производот. Свежо и квалитетно месо.</p>
                <p style={{ marginTop: "0.5rem", fontWeight: "bold", color: "#8b0000" }}>Цена: 500 ден</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={{
        padding: "4rem 1.5rem",
        backgroundImage: "url('https://images.unsplash.com/photo-1583337130417-3346a1e7f8b8')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: "2rem",
          borderRadius: "1rem",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>За Нас</h2>
          <p style={{ fontSize: "1.1rem" }}>
            Месара Боно е традиционална месарница во Ѓорче Петров, позната по квалитетно месо, свежина и услуга. Ние сме тука за вашата трпеза секој ден.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#000", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Контакт</h2>
          <p>📍 Ѓорче Петров, Скопје</p>
          <p style={{ marginBottom: "1.5rem" }}>📞 070 123 456</p>
          <form style={{ display: "grid", gap: "1rem" }}>
            <input type="text" placeholder="Вашето име" style={{ padding: "1rem", borderRadius: "0.5rem", backgroundColor: "#222", color: "#fff", border: "none" }} />
            <input type="text" placeholder="Телефон или емаил" style={{ padding: "1rem", borderRadius: "0.5rem", backgroundColor: "#222", color: "#fff", border: "none" }} />
            <textarea placeholder="Порака" rows="4" style={{ padding: "1rem", borderRadius: "0.5rem", backgroundColor: "#222", color: "#fff", border: "none" }}></textarea>
            <button type="submit" style={{ backgroundColor: "#8b0000", color: "#fff", padding: "1rem", borderRadius: "0.5rem", fontWeight: "bold", border: "none" }}>
              Испрати
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
