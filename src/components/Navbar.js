
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
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
                    <ul className="navbar-nav ms-auto gap-lg-4">
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