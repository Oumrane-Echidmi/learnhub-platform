
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, Link } from 'react-router-dom';
import coursesData from '../data/coursesData';
import { useCart } from '../context/CartContext';

function CoursesPage(){
    const { id } = useParams();
    const course = coursesData.find(c => c.id === parseInt(id));
    const { addToCart, isInCart } = useCart();
    const [activeTab, setActiveTab] = useState('overview');

    if (!course) {
        return (
            <>
                <Navbar />
                <div className="container py-5 text-center">
                    <h2 className="display-4">Course not found</h2>
                    <p className="lead">The requested course could not be located.</p>
                    <Link to="/courses" className="btn btn-primary mt-3">Back to Courses</Link>
                </div>
                <Footer />
            </>
        );
    }

    return(
        <>
        <Navbar />
        {/* Course Hero */}
        <div className="bg-dark text-white py-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-8">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb text-white-50">
                                <li className="breadcrumb-item"><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/courses" className="text-white-50 text-decoration-none">Courses</Link></li>
                                <li className="breadcrumb-item active text-white" aria-current="page">{course.category || "General"}</li>
                            </ol>
                        </nav>
                        <h1 className="display-4 fw-bold mb-3">{course.title}</h1>
                        <p className="lead mb-4">{course.desc}</p>
                        
                        <div className="d-flex flex-wrap gap-4 mb-4 align-items-center">
                            <div className="d-flex align-items-center">
                                <img src={course.instructorImage} className="rounded-circle me-2" alt={course.author} style={{width:'40px', height:'40px', objectFit:'cover'}} />
                                <div>
                                    <div className="fw-bold">{course.author}</div>
                                    <div className="small text-white-50">Instructor</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="warning-color me-1 fw-bold">{course.rating}</span>
                                <div className="text-warning">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                    ))}
                                </div>
                                <span className="ms-2 text-white-50 small">(1,452 ratings)</span>
                            </div>
                            <div className="small text-white-50">
                                12,500 Students
                            </div>
                        </div>
                        
                        <div className="d-flex gap-3">
                            <button 
                                className={`btn btn-light btn-lg fw-bold text-primary ${isInCart(course.id) ? 'disabled' : ''}`}
                                onClick={() => addToCart(course)}
                            >
                                {isInCart(course.id) ? 'Enrolled' : 'Enroll Now'}
                            </button>
                            <button className="btn btn-outline-light btn-lg fw-bold">Preview Course</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container py-5">
            <div className="row g-5">
                {/* Main Content Column */}
                <div className="col-lg-8">
                    {/* Tabs Navigation */}
                    <ul className="nav nav-tabs mb-4 border-bottom-0 gap-2">
                        {['overview', 'curriculum', 'instructor', 'reviews'].map(tab => (
                            <li className="nav-item" key={tab}>
                                <button 
                                    className={`nav-link fw-bold px-4 py-2 rounded-pill border-0 transition-all ${activeTab === tab ? 'bg-primary text-white' : 'text-muted'}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Tab Content */}
                    <div className="tab-content transition-all">
                        {activeTab === 'overview' && (
                            <div className="fade show active">
                                <div className="card shadow-sm mb-5 border-0 bg-light">
                                    <div className="card-body p-4">
                                        <h3 className="fw-bold mb-4">What You'll Learn</h3>
                                        <div className="row g-3">
                                            {[
                                                "Build responsive websites with HTML5 and CSS3",
                                                "Master JavaScript (ES6+) and DOM manipulation",
                                                "Create dynamic SPAs with React and Redux",
                                                "Build RESTful APIs with Node.js and Express",
                                                "Authentication and Security best practices",
                                                "Deploy applications to cloud platforms"
                                            ].map((item, idx) => (
                                                <div className="col-md-6 d-flex" key={idx}>
                                                    <svg className="text-success me-2 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="fw-bold mb-3">Description</h3>
                                <p className="text-muted lead fs-6">{course.desc}</p>
                                <p className="text-muted">
                                     This comprehensive course covers everything you need to know about {course.title}. 
                                     Whether you are a complete beginner or looking to expand your skills, this course 
                                     takes you from zero to hero with hands-on projects and expert instruction.
                                </p>
                            </div>
                        )}

                        {activeTab === 'curriculum' && (
                            <div className="fade show active">
                                <h3 className="fw-bold mb-4">Course Curriculum</h3>
                                <div className="accordion" id="curriculumAccordion">
                                    <div className="accordion-item border-0 shadow-sm mb-3 rounded overflow-hidden">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button fw-bold bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#section1">
                                                Section 1: Introduction <span className="ms-auto text-muted small fw-normal">3 lectures • 15 min</span>
                                            </button>
                                        </h2>
                                        <div id="section1" className="accordion-collapse collapse show" data-bs-parent="#curriculumAccordion">
                                            <div className="accordion-body p-0">
                                                <div className="list-group list-group-flush">
                                                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-4">
                                                        <span><svg width="16" height="16" fill="currentColor" className="me-2 text-primary" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg> 1. Welcome to the course</span>
                                                        <span className="text-muted small">05:20</span>
                                                    </div>
                                                    <div className="list-group-item d-flex justify-content-between align-items-center border-0 px-4">
                                                        <span><svg width="16" height="16" fill="currentColor" className="me-2 text-primary" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg> 2. Overview</span>
                                                        <span className="text-muted small">06:10</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-0 shadow-sm rounded overflow-hidden">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed fw-bold bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#section2">
                                                Section 2: Fundamentals <span className="ms-auto text-muted small fw-normal">12 lectures • 1h 20m</span>
                                            </button>
                                        </h2>
                                        <div id="section2" className="accordion-collapse collapse" data-bs-parent="#curriculumAccordion">
                                            <div className="accordion-body">
                                                <p className="text-muted mb-0">Core concepts and basic syntax...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'instructor' && (
                            <div className="fade show active">
                                <h3 className="fw-bold mb-3">Your Instructor</h3>
                                <div className="card border-0 bg-light p-4">
                                    <div className="d-flex flex-column flex-md-row gap-4">
                                        <img src={course.instructorImage} className="rounded-circle" alt={course.author} style={{width:'120px', height:'120px', objectFit:'cover'}} />
                                        <div>
                                            <h4 className="fw-bold mb-1">{course.author}</h4>
                                            <p className="text-primary fw-bold mb-2">Senior Instructor</p>
                                            <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
                                                <span>⭐ {course.rating} Instructor Rating</span>
                                                <span>👥 15,234 Students</span>
                                                <span>🎓 5 Courses</span>
                                            </div>
                                            <p className="text-muted mb-0">
                                                {course.author} is a lead instructor with years of experience in the
                                                industry. They are passionate about teaching and have helped thousands
                                                of students launch their careers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="fade show active">
                                <h3 className="fw-bold mb-4">Student Reviews</h3>
                                <div className="row g-4">
                                    {course.reviews ? course.reviews.map((review, index) => (
                                        <div className="col-md-6" key={index}>
                                            <div className="card h-100 border-0 shadow-sm p-4 bg-light">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img src={review.avatar} className="rounded-circle me-3" alt={review.name} style={{width:'50px', height:'50px', objectFit:'cover'}} />
                                                    <div>
                                                        <h6 className="fw-bold mb-0">{review.name}</h6>
                                                        <div className="text-warning small">
                                                            {"⭐".repeat(Math.floor(review.rating))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-muted mb-0 fst-italic">"{review.comment}"</p>
                                            </div>
                                        </div>
                                    )) : (
                                        <p className="text-muted">No reviews yet.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="col-lg-4">
                    <div className="position-sticky" style={{top: '100px', zIndex: 10}}>
                         {/* Video/Image Card */}
                        <div className="card shadow-lg border-0 overflow-hidden mb-4 mt-lg-n5">
                             <div className="position-relative">
                                <img src={course.image} className="card-img-top" alt={course.title} style={{height:'200px', objectFit:'cover'}}/>
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center pulse-animation shadow" style={{width:'60px', height:'60px', cursor:'pointer'}}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563EB"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                             </div>
                             <div className="card-body p-4">
                                 <div className="d-flex align-items-center justify-content-between mb-3">
                                     <h2 className="fw-bold mb-0 text-primary">{course.price}</h2>
                                     <span className="text-decoration-line-through text-muted">$199.99</span>
                                 </div>
                                 <button 
                                    className={`btn btn-primary w-100 btn-lg mb-3 fw-bold transition-all ${isInCart(course.id) ? 'btn-success' : ''}`}
                                    onClick={() => addToCart(course)}
                                    disabled={isInCart(course.id)}
                                 >
                                    {isInCart(course.id) ? '✓ In Cart' : 'Add to Cart'}
                                 </button>
                                 <p className="text-center text-muted small mb-4">30-Day Money-Back Guarantee</p>
                                 
                                 <h5 className="fw-bold fs-6 mb-3 border-top pt-3">This course includes:</h5>
                                 <ul className="list-unstyled text-muted small mb-0 d-flex flex-column gap-2">
                                     <li className="d-flex align-items-center"><svg className="me-2 text-primary" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z" /></svg> 52 hours on-demand video</li>
                                     <li className="d-flex align-items-center"><svg className="me-2 text-primary" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg> 125 downloadable resources</li>
                                     <li className="d-flex align-items-center"><svg className="me-2 text-primary" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg> Certificate of completion</li>
                                 </ul>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer />
        </>
    );
}

export default CoursesPage;