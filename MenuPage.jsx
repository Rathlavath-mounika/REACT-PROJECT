import React from 'react';

export default function MenuPage({ menuItems }) {
  const categories = [...new Set(menuItems.map(item => item.category))];
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Menu</h1>
        <p className="text-gray-600">Discover our delicious selection</p>
      </div>

      {categories.map(category => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-bold text-orange-600 border-b-2 border-orange-200 pb-2">
            {category}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {menuItems.filter(item => item.category === category).map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="text-6xl text-center mb-4">{item.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-2xl text-orange-600 font-bold">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}