import './index.css';
import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="decorations"></div>
      <div className="decorations right"></div>

      <header>
        <div className="awning">
          <h1>Месара Боно</h1>
        </div>
      </header>

      <main className="shop-window">
        <div className="frame">
          <div className="product-display">
            <img src="/images/placeholder-meat.jpg" alt="Производ 1" />
            <img src="/images/placeholder-meat.jpg" alt="Производ 2" />
            <img src="/images/placeholder-meat.jpg" alt="Производ 3" />
          </div>
        </div>
      </main>

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

      <footer>
        <p>&copy; 2025 Месара Боно</p>
      </footer>
    </div>
  );
}

export default App;
