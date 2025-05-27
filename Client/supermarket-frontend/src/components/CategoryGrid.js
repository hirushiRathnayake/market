import React from 'react';

const categories = [
  { name: 'Fruits', img: '🍎' },
  { name: 'Vegetables', img: '🥦' },
  { name: 'Dairy', img: '🥛' },
  { name: 'Bakery', img: '🍞' },
  { name: 'Meat', img: '🍗' },
  { name: 'Beverages', img: '🥤' },
];

const CategoryGrid = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Shop by Category</h2>
      <div className="row text-center">
        {categories.map((cat) => (
          <div key={cat.name} className="col-6 col-md-2 mb-3">
            <div className="border rounded p-3 shadow-sm bg-light">
              <div style={{ fontSize: '2.5rem' }}>{cat.img}</div>
              <p className="mt-2 fw-semibold">{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
