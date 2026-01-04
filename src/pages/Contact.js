import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Contact(){
    return(
        <>
            <Navbar />
            
            {/* Hero Section */}
            <div className="bg-primary text-white text-center py-5">
                <div className="container py-5">
                    <h1 className="display-4 fw-bold">Contact Us</h1>
                    <p className="lead">
                        Have a question or need support? We're here to help you on your learning journey.
                    </p>
                </div>
            </div>

            <div className="container my-5">
                {/* Contact Options */}
                <div className="row g-4 justify-content-center mb-5" style={{marginTop: '-80px'}}>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm text-center p-4">
                            <div className="d-flex justify-content-center mb-3">
                                <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                </div>
                            </div>
                            <h3>Email Us</h3>
                            <p className="text-muted">Send us an email and we'll respond within 24 hours.</p>
                            <a href="mailto:support@learnhub.com" className="text-decoration-none fw-bold">support@learnhub.com</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm text-center p-4">
                            <div className="d-flex justify-content-center mb-3">
                                <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.43-5.15-3.75-6.59-6.59l1.97-1.57c.27-.27.35-.66.24-1.01-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
                                </div>
                            </div>
                            <h3>Call Us</h3>
                            <p className="text-muted">Speak with our support team Monday to Friday.</p>
                            <a href="tel:+12345678900" className="text-decoration-none fw-bold">+1 (234) 567-8900</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm text-center p-4">
                            <div className="d-flex justify-content-center mb-3">
                                <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
                                </div>
                            </div>
                            <h3>Live Chat</h3>
                            <p className="text-muted">Chat with us in real-time for instant support.</p>
                            <a href="#" className="text-decoration-none fw-bold">Start Chat</a>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8">
                        <div className="text-center mb-4">
                            <h2>Send Us a Message</h2>
                            <p className="text-muted">Fill out the form below and we'll get back to you as soon as possible</p>
                        </div>
                        <div className="card border-0 shadow bg-white p-4">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="form-label fw-bold">First Name</label>
                                        <input type="text" className="form-control" placeholder="John" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email Address</label>
                                    <input type="email" className="form-control" placeholder="john@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Subject</label>
                                    <select className="form-select">
                                        <option>General Inquiry</option>
                                        <option>Course Support</option>
                                        <option>Billing Question</option>
                                        <option>Technical Issue</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Message</label>
                                    <textarea className="form-control" rows="5" placeholder="Tell us how we can help you..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Offices Section */}
                <div className="text-center mb-5">
                    <div className="mb-5">
                        <h2>Our Offices</h2>
                        <p className="text-muted">Visit us at one of our global locations.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="mb-3 d-flex justify-content-center">
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                </div>
                            </div>
                            <h3>San Francisco</h3>
                            <p className="text-muted">
                                123 Innovation Drive<br />San Francisco, CA 94105
                            </p>
                            <small className="text-muted">Mon-Fri: 9AM-6PM PST</small>
                        </div>
                        <div className="col-md-4">
                             <div className="mb-3 d-flex justify-content-center">
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                </div>
                            </div>
                            <h3>New York</h3>
                            <p className="text-muted">
                                456 Tech Avenue<br />New York, NY 10001
                            </p>
                            <small className="text-muted">Mon-Fri: 9AM-6PM EST</small>
                        </div>
                        <div className="col-md-4">
                             <div className="mb-3 d-flex justify-content-center">
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                </div>
                            </div>
                            <h3>London</h3>
                            <p className="text-muted">
                                789 Learning Street<br />London, UK EC1A 1BB
                            </p>
                            <small className="text-muted">Mon-Fri: 9AM-6PM GMT</small>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-4">
                            <h2>Frequently Asked Questions</h2>
                            <p className="text-muted">Quick answers to common questions.</p>
                        </div>
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item mb-3 border rounded shadow-sm">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                        How do I get started with LearnHub?
                                    </button>
                                </h2>
                                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body text-muted">
                                        Getting started is easy! Simply create an account, browse our catalog of courses, and click "Enroll" on any course that interests you. You'll get instant access to the materials.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 border rounded shadow-sm">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                        What payment methods do you accept?
                                    </button>
                                </h2>
                                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body text-muted">
                                        We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay. All transactions are secure and encrypted.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 border rounded shadow-sm">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                        Can I access courses on mobile devices?
                                    </button>
                                </h2>
                                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body text-muted">
                                        Yes! LearnHub is fully responsive. You can access your courses on any smartphone or tablet through our website or by downloading our mobile app.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 border rounded shadow-sm">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                        Do you offer refunds?
                                    </button>
                                </h2>
                                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body text-muted">
                                        We offer a 30-day money-back guarantee on all paid courses. If you are not satisfied with your purchase, contact our support team within 30 days for a full refund.
                                    </div>
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

export default Contact;