import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <div>
    <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start">Copyright &copy; Neon Car 2024</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><IoLogoTwitter/></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><IoLogoFacebook/></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><IoLogoLinkedin/></a>
                </div>
                <div className="col-lg-4 text-lg-end">
                    <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                    <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
</div>
  );
}

export default Footer;
