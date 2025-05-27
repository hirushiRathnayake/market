import React from 'react';

const products = [
  { name: 'Bananas', price: 'LKR 120', img: '🍌' },
  { name: 'Milk 1L', price: 'LKR 250', img: '🥛' },
  { name: 'Bread', price: 'LKR 100', img: '🍞' },
];

const FeaturedProducts = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.name} className="col-md-4 mb-3">
            <div className="card h-100 text-center">
              <div className="card-body">
                <div style={{ fontSize: '3rem' }}>{p.img}</div>
                <h5 className="card-title mt-3">{p.name}</h5>
                <p className="card-text">{p.price}</p>
                <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
