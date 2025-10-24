import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import MenuPage from './Components/MenuPage';
import BookingPage from './Components/BookingPage';
import MyBookingsPage from './Components/MyBookingPage';  
import AuthModal from './Components/AuthModal';
import { MENU_ITEMS, TIME_SLOTS, INITIAL_BOOKING_FORM, INITIAL_AUTH_FORM } from './Data/Data';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [bookingForm, setBookingForm] = useState(INITIAL_BOOKING_FORM);
  const [authForm, setAuthForm] = useState(INITIAL_AUTH_FORM);
  const [editingBooking, setEditingBooking] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  // Authentication
  const handleAuth = (e) => {
    e.preventDefault();
    const userData = {
      name: (isLogin ? authForm.email.split('@')[0] : authForm.name).trim(),
      email: authForm.email.trim(),
    };
    setUser(userData);
    setShowAuthModal(false);
    setAuthForm(INITIAL_AUTH_FORM);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  // Booking
  const handleSubmitBooking = (e) => {
    e.preventDefault();

    if (!user) {
      setShowAuthModal(true);
      return;
    }

    if (editingBooking) {
      setBookings(bookings.map(b =>
        b.id === editingBooking.id
          ? { ...bookingForm, id: editingBooking.id, userEmail: user.email }
          : b
      ));
      setEditingBooking(null);
    } else {
      const newBooking = {
        ...bookingForm,
        id: Date.now(),
        userEmail: user.email,
      };
      setBookings([...bookings, newBooking]);
    }

    setBookingForm(INITIAL_BOOKING_FORM);
    setCurrentPage('mybookings');
  };

  const handleEditBooking = (booking) => {
    setEditingBooking(booking);
    setBookingForm(booking);
    setCurrentPage('booking');
  };

  const handleCancelEdit = () => {
    setEditingBooking(null);
    setBookingForm(INITIAL_BOOKING_FORM);
  };

  const handleDeleteBooking = (id) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <MenuPage menuItems={MENU_ITEMS} />;
      case 'booking':
        return (
          <BookingPage
            bookingForm={bookingForm}
            setBookingForm={setBookingForm}
            handleSubmitBooking={handleSubmitBooking}
            editingBooking={editingBooking}
            handleCancelEdit={handleCancelEdit}
            timeSlots={TIME_SLOTS}
          />
        );
      case 'mybookings':
        return (
          <MyBookingsPage
            user={user}
            bookings={bookings}
            setCurrentPage={setCurrentPage}
            handleEditBooking={handleEditBooking}
            handleDeleteBooking={handleDeleteBooking}
          />
        );
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar
        user={user}
        setCurrentPage={setCurrentPage}
        setShowAuthModal={setShowAuthModal}
        handleLogout={handleLogout}
      />

      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      {showAuthModal && (
        <AuthModal
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          authForm={authForm}
          setAuthForm={setAuthForm}
          handleAuth={handleAuth}
          setShowAuthModal={setShowAuthModal}
        />
      )}
    </div>
  );
}