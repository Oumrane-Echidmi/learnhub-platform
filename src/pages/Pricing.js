import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Update btnClasses to Bootstrap
const plansData = [
  {
    id: 1,
    name: "Basic",
    desc: "Perfect for beginners",
    price: "$9",
    btnClass: "btn btn-outline-secondary w-100",
    btnText: "Get Started",
    popular: false,
    features: ["Access to 100+ courses", "Basic course materials", "Community access", "Mobile app access"]
  },
  {
    id: 2,
    name: "Pro",
    desc: "For serious learners",
    price: "$29",
    btnClass: "btn btn-primary w-100",
    btnText: "Get Started",
    popular: true,
    features: ["Access to all 1,200+ courses", "Premium course materials", "1-on-1 instructor support", "Downloadable content", "Certificates of completion", "Priority support"]
  },
  {
    id: 3,
    name: "Enterprise",
    desc: "For teams and organizations",
    price: "$99",
    btnClass: "btn btn-dark w-100",
    btnText: "Contact Sales",
    popular: false,
    features: ["Everything in Pro", "Up to 50 team members", "Advanced Analytics", "Custom learning paths", "Dedicated account manager", "SSO Integration"]
  }
];

function Pricing (){
    return(
        <>
        <Navbar />
        
        {/* Header */}
        <div className="bg-light py-5 text-center">
             <div className="container">
                <h1 className="display-4 fw-bold mb-3">Simple, Transparent Pricing</h1>
                <p className="lead text-muted mb-5">
                  Choose the perfect plan for your learning journey. No hidden fees, cancel anytime.
                </p>
                
                {/* Toggle (Visual Only) */}
                <div className="d-inline-flex bg-white rounded-pill p-1 border shadow-sm mb-4">
                     <button className="btn btn-primary rounded-pill px-4">Monthly</button>
                     <button className="btn btn-white rounded-pill px-4 text-muted">Yearly</button>
                </div>
             </div>
        </div>

        {/* Pricing Cards */}
        <div className="container py-5">
            <div className="row g-4 align-items-center">
              {plansData.map((plan) => (
                <div className="col-lg-4" key={plan.id}>
                  <div className={`card h-100 shadow-sm border-0 ${plan.popular ? 'border-primary ring-2' : ''}`} style={plan.popular ? {transform: 'scale(1.05)', zIndex: 1} : {}}>
                     {plan.popular && (
                         <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning text-dark px-3 py-2 border shadow-sm">MOST POPULAR</div>
                     )}
                    <div className="card-body p-4 text-center">
                      <h3 className="fw-bold mb-2">{plan.name}</h3>
                      <p className="text-muted mb-4">{plan.desc}</p>
                      <div className="display-4 fw-bold mb-1">{plan.price}<span className="fs-5 text-muted fw-normal">/mo</span></div>
                      
                      <a href="#" className={`${plan.btnClass} my-4 fw-bold py-2`}>{plan.btnText}</a>
                      
                      <ul className="list-unstyled text-start mb-0 d-grid gap-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="d-flex align-items-start">
                             <svg className="text-success me-2 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 
                             <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* FAQ Section */}
        <div className="container py-5 mb-5" style={{maxWidth: '800px'}}>
            <div className="text-center mb-5">
                <h2 className="fw-bold">Frequently Asked Questions</h2>
                <p className="text-muted">Get answers to common questions about our pricing plans</p>
            </div>
            
            <div className="accordion" id="pricingFaq">
                {[
                    {q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."},
                    {q: "Do you offer a free trial?", a: "Yes, we offer a 7-day free trial for all our plans. No credit card required to start."},
                    {q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."},
                    {q: "Is there a discount for yearly subscriptions?", a: "Yes, you can save up to 20% when you choose our yearly billing option."}
                ].map((item, i) => (
                    <div className="accordion-item mb-3 border rounded shadow-sm" key={i}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>
                                {item.q}
                            </button>
                        </h2>
                        <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                            <div className="accordion-body text-muted">
                                {item.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-primary text-white text-center py-5">
            <div className="container">
                <h2 className="fw-bold mb-3">Ready to Start Learning?</h2>
                <p className="lead mb-4 text-white-50">Join thousands of students already learning with LearnHub</p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="btn btn-light btn-lg text-primary fw-bold">Start Free Trial</a>
                    <a href="#" className="btn btn-outline-light btn-lg">Contact Sales</a>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    );
}

export default Pricing;