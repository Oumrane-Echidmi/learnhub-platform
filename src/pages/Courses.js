import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from 'react-router-dom';
import coursesData from '../data/coursesData';
import { useCart } from '../context/CartContext';

function Course(){
    const { addToCart, isInCart } = useCart();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    
    // Categories and Levels derived from data or defined manually
    const categories = ["Web Development", "Data Science", "Design", "Marketing", "Business", "DevOps"];
    
    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const filteredCourses = useMemo(() => {
        return coursesData.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 course.author.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
            
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategories]);

    return(
        <>
        <Navbar />
        <div className="container py-5">
            <div className="row g-5">
                {/* Sidebar Filters */}
                <div className="col-lg-3">
                    <div className="card border-0 shadow-sm p-4 sticky-top" style={{top: '100px'}}>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Categories</h5>
                            {categories.map(cat => (
                                <div className="form-check mb-2" key={cat}>
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id={`cat-${cat}`}
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                    />
                                    <label className="form-check-label" htmlFor={`cat-${cat}`}>{cat}</label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Level</h5>
                            {["Beginner", "Intermediate", "Expert"].map(level => (
                                <div className="form-check mb-2" key={level}>
                                    <input className="form-check-input" type="checkbox" id={`level-${level}`} />
                                    <label className="form-check-label" htmlFor={`level-${level}`}>{level}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-9">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
                        <h2 className="fw-bold mb-0">All Courses</h2>
                        <div className="d-flex align-items-center gap-3 flex-grow-1 flex-md-grow-0">
                            <span className="text-muted fw-bold d-none d-sm-inline">{filteredCourses.length} courses</span>
                            <div className="input-group" style={{maxWidth: '400px'}}>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Search courses or authors..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <span className="input-group-text bg-primary text-white">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div className="col-md-6 col-xl-4" key={course.id}>
                                    <div className="card h-100 border-0 shadow-sm hover-shadow transition-all overflow-hidden">
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
                                        <div className="card-body d-flex flex-column p-4">
                                            <h5 className="card-title fw-bold mb-3 lh-base">
                                                <Link to={`/course/${course.id}`} className="text-decoration-none text-dark">
                                                    {course.title}
                                                </Link>
                                            </h5>
                                            
                                            <div className="mt-auto">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img src={course.instructorImage} className="rounded-circle me-2" alt={course.author} style={{width:'30px', height:'30px', objectFit:'cover'}} />
                                                    <span className="text-muted small">By {course.author}</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                                                    <div>
                                                        <div className="d-flex align-items-center text-warning fw-bold small mb-1">
                                                            <span className="me-1">{course.rating}</span>
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                            </svg>
                                                        </div>
                                                        <span className="fw-bold fs-5 text-primary">{course.price}</span>
                                                    </div>
                                                    <button 
                                                        className={`btn btn-sm ${isInCart(course.id) ? 'btn-success' : 'btn-outline-primary'}`}
                                                        onClick={() => addToCart(course)}
                                                        disabled={isInCart(course.id)}
                                                    >
                                                        {isInCart(course.id) ? 'In Cart' : 'Add to Cart'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <h3 className="text-muted">No courses found matching your criteria.</h3>
                                <button className="btn btn-primary mt-3" onClick={() => {setSearchQuery(""); setSelectedCategories([]);}}>Clear all filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Course;