import React from 'react';
import { Calendar, Clock, Users, Mail, User, Phone } from 'lucide-react';

export default function BookingPage({ bookingForm, setBookingForm, handleSubmitBooking, editingBooking, handleCancelEdit, timeSlots }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {editingBooking ? 'Edit Your Reservation' : 'Book a Table'}
        </h1>
        
        <div className="space-y-6">
          <div>
            <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
              <User size={20} />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={bookingForm.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
              <Mail size={20} />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={bookingForm.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
              <Phone size={20} />
              <span>Phone Number</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={bookingForm.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <Calendar size={20} />
                <span>Date</span>
              </label>
              <input
                type="date"
                name="date"
                value={bookingForm.date}
                onChange={handleChange}
                min={today}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <Clock size={20} />
                <span>Time</span>
              </label>
              <select
                name="time"
                value={bookingForm.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select time</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
              <Users size={20} />
              <span>Number of Guests</span>
            </label>
            <input
              type="number"
              name="guests"
              value={bookingForm.guests}
              onChange={handleChange}
              min="1"
              max="20"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
              <span>Special Requests (Optional)</span>
            </label>
            <textarea
              name="specialRequests"
              value={bookingForm.specialRequests}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Any dietary restrictions or special occasions?"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleSubmitBooking}
              className="flex-1 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition transform hover:scale-105 font-medium"
            >
              {editingBooking ? 'Update Reservation' : 'Confirm Booking'}
            </button>
            
            {editingBooking && (
              <button
                onClick={handleCancelEdit}
                className="px-6 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}