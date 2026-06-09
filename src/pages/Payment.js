import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {
    const { cart, clearCart } = useCart();
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalPrice = cart.reduce((total, item) => {
        return total + parseFloat(item.price.replace('$', ''));
    }, 0).toFixed(2);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        
        // Simulate Payment Processing
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            clearCart();
        }, 2500);
    };

    if (isSuccess) {
        return (
            <>
                <Navbar />
                <div className={`container py-5 text-center min-vh-100 d-flex flex-column align-items-center justify-content-center ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                    <div className="bg-success text-white rounded-circle p-4 mb-4 animate-bounce">
                        <svg width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </div>
                    <h1 className="fw-bold mb-3">Payment Successful!</h1>
                    <p className="lead text-muted mb-5">Your enrollment is confirmed. Welcome to LearnHub!</p>
                    <div className="d-flex gap-3">
                        <Link to="/courses" className="btn btn-primary btn-lg px-4 fw-bold">Back to Courses</Link>
                        <Link to="/" className="btn btn-outline-secondary btn-lg px-4 fw-bold">Go to Dashboard</Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (cart.length === 0 && !isSuccess) {
        return (
            <>
                <Navbar />
                <div className={`container py-5 text-center min-vh-100 d-flex flex-column align-items-center justify-content-center ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                    <h2>No items to checkout</h2>
                    <Link to="/courses" className="btn btn-primary mt-3">Browse Courses</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className={`container py-5 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                <h1 className="fw-bold mb-5 text-center">Checkout</h1>

                <div className="row g-5 justify-content-center">
                    {/* Payment Form */}
                    <div className="col-lg-6">
                        <div className={`card border-0 shadow-sm p-4 p-md-5 ${isDarkMode ? 'bg-dark border border-secondary' : 'bg-white'}`}>
                            <h4 className="fw-bold mb-4">Payment Information</h4>
                            <form onSubmit={handlePayment}>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold small">NAME ON CARD</label>
                                    <input type="text" className={`form-control border-0 py-3 ${isDarkMode ? 'bg-secondary text-white' : 'bg-light'}`} placeholder="John Doe" required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold small">CARD NUMBER</label>
                                    <div className="input-group">
                                        <input type="text" className={`form-control border-0 py-3 ${isDarkMode ? 'bg-secondary text-white' : 'bg-light'}`} placeholder="**** **** **** ****" required />
                                        <span className={`input-group-text border-0 ${isDarkMode ? 'bg-secondary text-white-50' : 'bg-light'}`}>
                                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-6">
                                        <label className="form-label fw-semibold small">EXPIRY DATE</label>
                                        <input type="text" className={`form-control border-0 py-3 ${isDarkMode ? 'bg-secondary text-white' : 'bg-light'}`} placeholder="MM / YY" required />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label fw-semibold small">CVV</label>
                                        <input type="text" className={`form-control border-0 py-3 ${isDarkMode ? 'bg-secondary text-white' : 'bg-light'}`} placeholder="***" required />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className={`btn btn-primary btn-lg w-100 fw-bold py-3 ${isProcessing ? 'disabled' : ''}`}
                                >
                                    {isProcessing ? (
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    ) : null}
                                    {isProcessing ? 'Processing...' : `Pay $${totalPrice}`}
                                </button>
                            </form>
                            <div className="mt-4 text-center">
                                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className="me-2" style={{width: '32px'}} />
                                <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="mastercard" className="me-2" style={{width: '32px'}} />
                                <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" style={{width: '32px'}} />
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Widget */}
                    <div className="col-lg-4">
                        <div className={`card border-0 shadow-sm p-4 ${isDarkMode ? 'bg-dark border border-secondary' : 'bg-white'}`}>
                            <h5 className="fw-bold mb-4">Order Summary</h5>
                            <div className="d-flex flex-column gap-3 mb-4">
                                {cart.map(item => (
                                    <div key={item.id} className="d-flex justify-content-between align-items-center">
                                        <div className="small text-truncate me-3" style={{maxWidth: '150px'}}>{item.title}</div>
                                        <div className="fw-bold small">{item.price}</div>
                                    </div>
                                ))}
                            </div>
                            <hr className="mb-4" />
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted small">Subtotal</span>
                                <span className="fw-bold small">${totalPrice}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <h5 className="fw-bold">Total</h5>
                                <h5 className="fw-bold text-primary">${totalPrice}</h5>
                            </div>
                            <Link to="/cart" className="btn btn-link btn-sm text-decoration-none p-0">Edit Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;