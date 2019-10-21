import React from "react";
import FacebookLogo from "../images/facebook-image.png";
import InstagramLogo from "../images/instagram-logo.png"; 

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <a href="https://www.facebook.com/4montnait"><img className="facebook-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                    <a href="https://www.instagram.com/4montnait/"><img className="instagram-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                    <div className="footer-nav">
                        <a href="https://www.4montnait.com/"><p className="footer-hover">MARKETING</p></a>
                        <a href="https://www.4montnait.com/"><p className="footer-hover">CONCEPTION</p></a>
                        <a href="https://www.4montnait.com/"><p className="footer-hover">PRODUCTION</p></a>
                        <a href="https://www.4montnait.com/"><p className="footer-hover">ABOUT US</p></a>
                        <a href="https://www.4montnait.com/"><p className="footer-hover">CONTACT</p></a>
                    </div>
                    <p className="copyright">© 2019 4montnait</p>
                </div>
            </div>
        )
    }
}

export default Footer 