import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from 'react-router-dom';
import coursesData from '../data/coursesData';

function Course(){
    return(
        <>
        <Navbar />
        <div className="container py-5">
            <div className="row g-5">
                {/* Sidebar Filters */}
                <div className="col-lg-3">
                    <div className="card border-0 shadow-sm p-4 sticky-top" style={{top: '20px'}}>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Categories</h5>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultChecked />
                                <label className="form-check-label">Web Development</label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Data Science</label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Design</label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Marketing</label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Level</h5>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Beginner</label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Intermediate</label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Expert</label>
                            </div>
                        </div>
                        <div>
                            <h5 className="fw-bold mb-3">Price</h5>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Free</label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Paid</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-9">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                        <h2 className="fw-bold mb-3 mb-md-0">All Courses</h2>
                        <div className="d-flex align-items-center gap-3">
                            <span className="text-muted fw-bold">135 courses</span>
                            <div className="input-group" style={{maxWidth: '300px'}}>
                                <input type="text" className="form-control" placeholder="Search courses..." />
                                <button className="btn btn-primary" type="button">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {coursesData.map((course) => (
                            <div className="col-md-6 col-xl-4" key={course.id}>
                                <div className="card h-100 border-light shadow-sm hover-shadow transition-all">
                                    <div style={{position:'relative'}}>
                                        <img src={course.image} className="card-img-top" alt={course.title} style={{height: '180px', objectFit: 'cover'}} />
                                        {course.badge && (
                                            <span className={`badge position-absolute top-0 start-0 m-3 ${
                                                  course.badgeClass === 'badge-purple' ? 'bg-info text-dark' : 
                                                  course.badgeClass === 'badge-orange' ? 'bg-warning text-dark' :
                                                  course.badgeClass === 'badge-green' ? 'bg-success' : 'bg-primary'
                                              }`}>
                                                {course.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title fw-bold mb-3">
                                            <Link to={`/course/${course.id}`} className="text-decoration-none text-dark stretched-link">
                                                {course.title}
                                            </Link>
                                        </h5>
                                        
                                        <div className="mt-auto">
                                            <div className="d-flex align-items-center mb-3">
                                                 <img src={course.instructorImage} className="rounded-circle me-2" alt={course.author} style={{width:'30px', height:'30px', objectFit:'cover'}} />
                                                 <span className="text-muted small">By {course.author}</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                                                <div className="d-flex align-items-center text-warning fw-bold small">
                                                    <span className="me-1">{course.rating}</span>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                    </svg>
                                                </div>
                                                <span className="fw-bold fs-5 text-dark">{course.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Course;