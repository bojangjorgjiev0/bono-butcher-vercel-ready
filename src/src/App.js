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

      <footer>
        <p>&copy; 2025 Месара Боно</p>
      </footer>
    </div>
  );
}

export default App;
