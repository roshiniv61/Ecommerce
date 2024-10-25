import React, { useState } from 'react';

const PriceFilter = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(140); // Set max price based on your data

  const handleMinPriceChange = (e) => {
    setMinPrice(Number(e.target.value));
    onPriceChange(Number(e.target.value), maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
    onPriceChange(minPrice, Number(e.target.value));
  };

  return (
    <div className="price-filter">
      <h3>Filter by Price</h3>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="slider"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="slider w-[100%]"
        />
      </div>
      <div className="price-range">
        <span>Min: ${minPrice}</span>
        <span>Max: ${maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceFilter;



