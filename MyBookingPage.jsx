import React from 'react';
import { Calendar, Clock, Users, Mail, Phone, Edit2, Trash2 } from 'lucide-react';

export default function MyBookingsPage({ user, bookings, setCurrentPage, handleEditBooking, handleDeleteBooking }) {
  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600 mb-4">Please log in to view your bookings</p>
        <button
          onClick={() => setCurrentPage('home')}
          className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const userBookings = bookings.filter(b => b.userEmail === user.email);

  if (userBookings.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">No Bookings Yet</h2>
        <p className="text-gray-600 mb-6">You haven't made any reservations yet.</p>
        <button
          onClick={() => setCurrentPage('booking')}
          className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Make a Reservation
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">My Bookings</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {userBookings.map(booking => (
          <div key={booking.id} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-800">{booking.name}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditBooking(booking)}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDeleteBooking(booking.id)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{booking.date}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{booking.time}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Users size={16} />
                <span>{booking.guests} guests</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail size={16} />
                <span>{booking.email}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} />
                <span>{booking.phone}</span>
              </p>
              {booking.specialRequests && (
                <div className="mt-3 p-3 bg-orange-50 rounded">
                  <p className="text-sm font-medium text-gray-700">Special Requests:</p>
                  <p className="text-sm text-gray-600">{booking.specialRequests}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}