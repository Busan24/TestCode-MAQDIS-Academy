import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProgressSection from './components/ProgressSection';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import './App.css';

const App = () => {
  const [currentProductId, setCurrentProductId] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')) || 1;
    setCurrentProductId(id);
    
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
  }, []);

  const handleProductChange = (id) => {
    setCurrentProductId(id);
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
    
    const newUrl = `${window.location.pathname}?id=${id}`;
    window.history.pushState({}, '', newUrl);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        
        <div className="product-selector">
          <h3>Pilih Produk:</h3>
          <div className="product-tabs">
            {products.map(p => (
              <button
                key={p.id}
                className={`tab ${currentProductId === p.id ? 'active' : ''}`}
                onClick={() => handleProductChange(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <ProgressSection />
        <ProductCard product={product} />
        
        <div className="promo-banner">
          <div className="promo-content">
            <h3>Makin Betah Baca Al-Quran Dengan Irama</h3>
            <p>Dapatkan pengalaman membaca yang lebih menyenangkan</p>
            <button className="promo-btn">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;