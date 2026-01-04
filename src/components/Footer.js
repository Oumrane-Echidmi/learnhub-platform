

function Footer(){
    return(
        <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
          <div className="container">
            <div className="row g-4 justify-content-between">
              {/* Brand Column */}
              <div className="col-lg-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-white text-primary rounded p-1 me-2 d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                    </svg>
                  </div>
                  <span className="h4 fw-bold mb-0">LearnHub</span>
                </div>
                <p className="text-white-50">
                  Empowering learners worldwide with quality education and skills development.
                </p>
              </div>

              {/* Links Columns */}
              <div className="col-lg-2 col-md-4">
                <h5 className="fw-bold mb-3">Company</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">About Us</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Careers</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Press</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Contact</a></li>
                </ul>
              </div>
              
              <div className="col-lg-2 col-md-4">
                <h5 className="fw-bold mb-3">Resources</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Blog</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Help Center</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Community</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Partners</a></li>
                </ul>
              </div>
              
              <div className="col-lg-2 col-md-4">
                <h5 className="fw-bold mb-3">Legal</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Privacy Policy</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Terms of Service</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            <hr className="my-4 border-secondary" />

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p className="mb-3 mb-md-0 text-white-50 small">© 2025 LearnHub. All rights reserved.</p>
              <div className="d-flex gap-3">
                <a href="#" className="text-white-50 hover-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.39 6.08V8.7H14.86C13.65 8.7 13.41 9.27 13.41 10.1V12.06H16.32L15.85 14.96H13.41V21.96C18.19 21.21 21.85 17.06 21.85 12.06C21.85 6.53 17.35 2.04 12 2.04Z"/></svg></a>
                <a href="#" className="text-white-50 hover-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16.03 6.03 17.26 7.93 17.3C6.47 18.45 4.61 19.13 2.61 19.13C2.26 19.13 1.92 19.11 1.59 19.07C3.5 20.29 5.77 21 8.21 21C16.15 21 20.48 14.43 20.48 8.76C20.48 8.57 20.48 8.39 20.47 8.21C21.31 7.6 22.02 6.85 22.46 6Z"/></svg></a>
                <a href="#" className="text-white-50 hover-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg></a>
                <a href="#" className="text-white-50 hover-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2A5.8 5.8 0 0 1 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2M7.6 4A3.6 3.6 0 0 0 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4A3.6 3.6 0 0 0 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75A1.25 1.25 0 0 1 17.25 5.5M12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7M12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9Z"/></svg></a>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;