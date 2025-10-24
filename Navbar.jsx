import React from 'react';
import { ChefHat, LogIn, LogOut } from 'lucide-react';

export default function Navbar({ user, setCurrentPage, setShowAuthModal, handleLogout }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <ChefHat className="text-orange-600" size={32} />
            <span className="text-2xl font-bold text-gray-800">Delicious Dine</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-orange-600 transition">
              Home
            </button>
            <button onClick={() => setCurrentPage('menu')} className="text-gray-700 hover:text-orange-600 transition">
              Menu
            </button>
            <button onClick={() => setCurrentPage('booking')} className="text-gray-700 hover:text-orange-600 transition">
              Book Table
            </button>
            
            {user ? (
              <>
                <button onClick={() => setCurrentPage('mybookings')} className="text-gray-700 hover:text-orange-600 transition">
                  My Bookings
                </button>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700"> {user.name}</span>
                  <button onClick={handleLogout} className="flex items-center space-x-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <button onClick={() => setShowAuthModal(true)} className="flex items-center space-x-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
                <LogIn size={16} />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}