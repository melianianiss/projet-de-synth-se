
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const styleText ={
        color:'#fff',
        opacity: '0.7'
    }
  return (
    <>
    <div className="container-fluid" style={{background:' #334389',marginBottom: '-50px',color:'#fff'}}>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 ">
            <div className="col mb-3 d-flex align-items-center justify-content-center">
                <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                     <img src="./images/logo.png" alt="logo" width="120px"/> 
                </a>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a className="nav-link p-0 " style={styleText}>Home</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>Features</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>Pricing</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>FAQs</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>About</a></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>Home</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>Features</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>Pricing</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>FAQs</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>About</a></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>Home</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>Features</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>Pricing</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>FAQs</a></li>
                    <li className="nav-item mb-2"><a className="nav-link p-0 "style={styleText}>About</a></li>
                </ul>
            </div>
        </footer>
        <div className="footer d-flex flex-wrap justify-content-between align-items-center pb-3" style={{
            marginLeft: '7rem',
            marginRight: '7rem'
        }}>
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-light">© 2024 MELKAT </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-light" style={{fontSize: '2rem'}} href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li className="ms-3"><a className="text-light" style={{fontSize: '2rem'}} href="https://www.instagram.com/melkat_hos?igsh=ZmJyN2Q1bGNwcWZt&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li className="ms-3"><a className="text-light" style={{fontSize: '2rem'}} href="https://youtube.com/@MELKAT-iy9xe?si=0UrSVBxKAWPKK9Ca"><FontAwesomeIcon icon={faYoutube} /></a></li>
            </ul>
        </div>
    </div>

    </>
  )
}

export default Footer;

