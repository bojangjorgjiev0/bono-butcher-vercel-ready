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
backgroundImage: "url('https://images.unsplash.com/photo-1604908554161-3f3fdf27a80a')"
  backgroundSize: "cover",
  backgroundPosition: "center"
}}>
  <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", textShadow: "2px 2px 5px #000" }}>
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
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Контакт</h2>
        <p style={{ fontSize: "1.1rem" }}>📞 070 123 456</p>
        <p style={{ fontSize: "1.1rem" }}>📞 078 654 321</p>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>📍 Ѓорче Петров, Скопје</p>

        <div style={{ marginTop: "2rem" }}>
          <iframe
            title="Месара Боно локација"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.035019135701!2d21.37458631534357!3d42.00287457921261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354159c31563b61%3A0x7a062fa6edb7d3a6!2z0JzQtdC70L7QvNCwINCf0L7QtNC-0LLQsCDQm9C10YDQvNCw!5e0!3m2!1smk!2smk!4v1617870800000!5m2!1smk!2smk"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
