import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-detail">
      <div 
        className="product-card"
        style={{ backgroundColor: product.color }}
      >
        <div className="product-info">
          <div className="product-icon">
            <Star size={24} />
          </div>
          <div className="product-content">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="product-meta">
              <span className="price">{product.price}</span>
              <span className={`status ${product.status}`}>
                {product.status === 'free' ? 'Gratis' : 'Premium'}
              </span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${product.progress}%` }}
              ></div>
            </div>
            <p className="progress-text">Progress: {product.progress}%</p>
          </div>
        </div>
        <div className="product-actions">
          <button className="btn-primary">
            <ShoppingCart size={20} />
            {product.status === 'free' ? 'Mulai Belajar' : 'Beli Sekarang'}
          </button>
          <button className="btn-secondary">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
