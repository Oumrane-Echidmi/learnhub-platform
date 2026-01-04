import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import coursesData from '../data/coursesData';
import img1 from '../assets/images/home-1.png';

const stats = [
  { number: "50K+", label: "Active Students" },
  { number: "1,200+", label: "Online Courses" },
  { number: "4.8/5", label: "Average Rating" }
];

const features = [
  {
    id: 1,
    iconClass: "bg-primary text-white", // Bootstrap classes for replacement
    path: "M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4l7 3.82 7-3.82v-4L12 17l-7-3.82z",
    title: "Expert Instructors",
    desc: "Learn from industry professionals with years of real-world experience."
  },
  {
    id: 2,
    iconClass: "bg-danger text-white",
    path: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    title: "Learn at Your Pace",
    desc: "Access courses anytime, anywhere with lifetime access to content."
  },
  {
    id: 3,
    iconClass: "bg-success text-white",
    path: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
    title: "Certificates",
    desc: "Earn recognized certificates to showcase your achievements."
  }
];

function Home (){

    // Get the first 4 courses for the "Popular" section
    const popularCourses = coursesData.slice(0, 4);

    return(
        <>
  <Navbar />
  
  {/* Hero Section */}
  <section className="bg-light py-5">
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="display-4 fw-bold mb-4 text-dark">
            Learn Anything,<br />
            Anytime, Anywhere
          </h1>
          <p className="lead text-dark mb-4">
            Access thousands of courses from world-class instructors. Build skills
            that matter for your career and personal growth.
          </p>
          <div className="d-flex gap-3 mb-5">
            <a href="#" className="btn btn-primary btn-lg">Get Started Free</a>
            <a href="#" className="btn btn-outline-secondary btn-lg">Browse Courses</a>
          </div>
          <div className="d-flex gap-5">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="fw-bold mb-0">{stat.number}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img className="img-fluid rounded-4 shadow-lg" src={img1} alt="Hero" style={{maxHeight:'500px', objectFit:'cover'}} />
        </div>
      </div>
    </div>
  </section>

  {/* Popular Courses Section */}
  <section className="py-5 bg-white">
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-end mb-5">
        <div>
          <h2 className="fw-bold mb-2">Popular Courses</h2>
          <p className="text-muted mb-0">Start learning with our most popular courses</p>
        </div>
        <Link to="/courses" className="btn btn-outline-primary">
          View All Courses →
        </Link>
      </div>

      <div className="row g-4">
        {popularCourses.map((course) => (
          <div className="col-md-6 col-lg-3" key={course.id}>
            <div className="card h-100 border-light shadow-sm hover-shadow transition-all">
               <div style={{position:'relative'}}>
                  <img src={course.image} className="card-img-top" alt={course.title} style={{height: '200px', objectFit: 'cover'}} />
                  <span className={`badge position-absolute top-0 start-0 m-3 ${
                      course.badgeClass === 'badge-purple' ? 'bg-info text-dark' : 
                      course.badgeClass === 'badge-orange' ? 'bg-warning text-dark' :
                      course.badgeClass === 'badge-green' ? 'bg-success' : 'bg-primary'
                  }`}>
                    {course.badge}
                  </span>
               </div>
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">
                    <Link to={`/course/${course.id}`} className="text-decoration-none text-dark stretched-link">
                        {course.title}
                    </Link>
                </h5>
                <p className="card-text text-muted small mb-3">{course.desc.substring(0, 80)}...</p>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <div className="d-flex align-items-center">
                    <img src={course.instructorImage} className="rounded-circle me-2" alt={course.author} style={{width:'32px', height:'32px', objectFit:'cover'}} />
                    <small className="fw-semibold text-muted">{course.author}</small>
                  </div>
                  <div className="d-flex align-items-center text-warning small fw-bold">
                    <span className="me-1">{course.rating}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-5 bg-light">
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-3">Why Choose LearnHub?</h2>
      <p className="text-muted mb-5">Everything you need to succeed in your learning journey</p>
      
      <div className="row g-4">
        {features.map((feature) => (
           <div className="col-md-4" key={feature.id}>
             <div className="card h-100 border-0 shadow-sm p-4 text-start">
               <div className={`d-inline-flex align-items-center justify-content-center p-3 rounded-3 mb-3 ${feature.iconClass}`} style={{width: '60px', height: '60px'}}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d={feature.path} />
                 </svg>
               </div>
               <h3 className="h4 fw-bold mb-3">{feature.title}</h3>
               <p className="text-muted mb-0">{feature.desc}</p>
             </div>
           </div>
        ))}
      </div>
    </div>
  </section>
  <Footer/>
</>
    );
}

export default Home;