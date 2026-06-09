import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const { isDarkMode } = useTheme();

    const totalPrice = cart.reduce((total, item) => {
        return total + parseFloat(item.price.replace('$', ''));
    }, 0).toFixed(2);

    return (
        <>
            <Navbar />
            <div className={`container py-5 min-vh-100 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                <h1 className="fw-bold mb-5">Shopping Cart</h1>

                <div className="row g-5">
                    {/* Cart Items */}
                    <div className="col-lg-8">
                        {cart.length > 0 ? (
                            <div className="d-flex flex-column gap-4">
                                {cart.map((item) => (
                                    <div key={item.id} className={`card border-0 shadow-sm overflow-hidden ${isDarkMode ? 'bg-dark border border-secondary' : 'bg-white'}`}>
                                        <div className="row g-0 align-items-center">
                                            <div className="col-md-3">
                                                <img src={item.image} alt={item.title} className="img-fluid" style={{ height: '120px', width: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div className="col-md-6 p-4">
                                                <h5 className="fw-bold mb-1">{item.title}</h5>
                                                <p className="text-muted small mb-0">By {item.author}</p>
                                                <div className="d-flex align-items-center mt-2">
                                                    <span className="text-warning small fw-bold me-2">⭐ {item.rating}</span>
                                                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle small">{item.badge}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-4 text-md-end">
                                                <h4 className="fw-bold mb-3">{item.price}</h4>
                                                <button 
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-5 card border-0 shadow-sm bg-light-subtle">
                                <div className="card-body py-5">
                                    <svg width="64" height="64" fill="currentColor" className="text-muted mb-4" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    <h3>Your cart is empty</h3>
                                    <p className="text-muted">Looks like you haven't added any courses yet.</p>
                                    <Link to="/courses" className="btn btn-primary mt-3 px-4 fw-bold">Browse Courses</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Summary */}
                    <div className="col-lg-4">
                        <div className={`card border-0 shadow-sm p-4 sticky-top ${isDarkMode ? 'bg-dark border border-secondary' : 'bg-white'}`} style={{ top: '100px' }}>
                            <h4 className="fw-bold mb-4">Summary</h4>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Original Price</span>
                                <span className="fw-bold">${totalPrice}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Discounts</span>
                                <span className="text-success fw-bold">-$0.00</span>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-between mb-4">
                                <h5 className="fw-bold">Total</h5>
                                <h5 className="fw-bold text-primary">${totalPrice}</h5>
                            </div>
                            <Link 
                                to={cart.length > 0 ? "/payment" : "#"} 
                                className={`btn btn-primary btn-lg w-100 fw-bold ${cart.length === 0 ? 'disabled' : ''}`}
                            >
                                Checkout
                            </Link>
                            <p className="text-center text-muted small mt-3 mb-0">Secure Transaction ensured by LearnHub Pay</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;