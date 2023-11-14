import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ name, description, price, sku, availableQuantity, imageUrl }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = showFullDescription
    ? description
    : description.split(' ').slice(0, 30).join(' ') + '...';

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{name}</h2>
        <p><strong>Descripción:</strong> {truncatedDescription}</p>
        {!showFullDescription && (
          <button onClick={toggleDescription} className="toggle-button">
            Ver más
          </button>
        )}
        {showFullDescription && (
          <button onClick={toggleDescription} className="toggle-button">
            Ver menos
          </button>
        )}
        <p><strong>Precio:</strong> {price}</p>
        <p><strong>SKU:</strong> {sku}</p>
        <p><strong>Cantidad Disponible:</strong> {availableQuantity}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
