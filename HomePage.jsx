import React from 'react';
import { Utensils, MapPin, Clock } from 'lucide-react';

export default function HomePage({ setCurrentPage }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-6 py-12">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Delicious Dine</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience culinary excellence in a warm, inviting atmosphere. Book your table today!
        </p>
        <button
          onClick={() => setCurrentPage('booking')}
          className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-700 transition transform hover:scale-105"
        >
          Reserve Your Table
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Utensils className="text-orange-600" size={48} />
          </div>
          <h3 className="text-xl font-bold mb-2">Exquisite Cuisine</h3>
          <p className="text-gray-600">Fresh ingredients prepared by master chefs</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <MapPin className="text-orange-600" size={48} />
          </div>
          <h3 className="text-xl font-bold mb-2">Prime Location</h3>
          <p className="text-gray-600">Conveniently located in the heart of the city</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <Clock className="text-orange-600" size={48} />
          </div>
          <h3 className="text-xl font-bold mb-2">Flexible Hours</h3>
          <p className="text-gray-600">Open for lunch and dinner every day</p>
        </div>
      </div>
    </div>
  );
}