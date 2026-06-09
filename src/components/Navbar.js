
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();
    const { cart } = useCart();

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm sticky-top transition-all`}>
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center fw-bold text-primary fs-4">
                     <div className="bg-primary text-white rounded p-1 me-2 d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                        </svg>
                     </div>
                     LearnHub
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-lg-4 align-items-center">
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link fw-semibold">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link fw-semibold">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pricing" className="nav-link fw-semibold">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link fw-semibold">Contact</NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <button 
                                onClick={toggleTheme} 
                                className="btn btn-link nav-link p-0 border-0" 
                                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                {isDarkMode ? (
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
                                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                                    </svg>
                                )}
                            </button>
                        </li>
                        <li className="nav-item position-relative">
                            <Link to="/cart" className="nav-link">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                {cart.length > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                                        {cart.length}
                                    </span>
                                )}
                            </Link>
                        </li>
                         <li className="nav-item">
                            <NavLink to="/login" className="btn btn-primary px-4 fw-bold">Sign In</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;