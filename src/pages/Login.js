

function Login(){
    return(
    <>
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-light py-5'>
        <div className="card border-0 shadow-sm p-4 p-md-5" style={{maxWidth: '450px', width: '100%'}}>
            <div className="text-center mb-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                  </svg>
                </div>
                <h1 className="h3 fw-bold mb-1">Welcome back</h1>
                <p className="text-muted">Please enter your details to sign in.</p>
            </div>
            
            <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Password</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label text-muted small" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a href="#" className="text-decoration-none small text-primary fw-bold">Forgot password?</a>
                </div>
                
                <button type="submit" className="btn btn-primary w-100 py-2 mb-3 fw-bold">Sign in</button>
            </form>
            
            <div className="position-relative text-center mb-3">
                <hr className="text-muted" />
                <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted small">OR</span>
            </div>
            
            <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.51 19.27 5 16.38 5 12c0-4.1 3.51-7.26 7.14-7.26 2.01 0 3.84.63 5.39 1.9l1.97-2.33C17.12 2.37 14.81 1.17 12.14 1.17 6.01 1.17 1 6.13 1 12s5.01 10.83 11.14 10.83c6.03 0 10.87-4.15 10.87-10.83 0-1.07-.15-1.78-.34-2.5l-1.32.6z" fill="#4285F4"/>
                </svg>
                Sign in with Google
            </button>
            
            <p className="text-center text-muted mb-0">
               Don't have an account? <a href="#" className="text-primary fw-bold text-decoration-none">Sign up for free</a>
            </p>
        </div>
    </div>
    </>
    );
}

export default Login;