import { HiOutlineMapPin } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";
import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="footer-body">
        <div className="hf-accordion-body">
          <ul>
            <li className="footer-link">
              <a href="#">FIND A STORE</a>
            </li>
            <li className="footer-link">
              <a href="#">BECOME A MEMBER</a>
            </li>
            <li className="footer-link">
              <a href="#">Send Us Feedback</a>
            </li>
          </ul>
        </div>
        <div className="hf-accordion-body">
          <ul>
            <li className="footer-link">
              <a href="#">GET HELP</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Order Status</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Delivery</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Returns</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Payment Options</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Contact Us On Nike.com Inquiries</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Contact Us On All Other Inquiries</a>
            </li>
          </ul>
        </div>
        <div className="hf-accordion-body">
          <ul>
            <li className="footer-link">
              <a href="#">ABOUT NIKE</a>
            </li>
            <li className="footer-linkes">
              <a href="#">News</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Careers</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Investors</a>
            </li>
            <li className="footer-linkes">
              <a href="#">Sustainability</a>
            </li>
          </ul>
        </div>

        <ul className="social-links">
          <li className="social-icons">
            <a href="#">
              <FaTwitter className="social-link-icon" />
            </a>
          </li>
          <li className="social-icons">
            <a href="#">
              <FaFacebookF className="social-link-icon" />
            </a>
          </li>
          <li className="social-icons">
            <a href="#">
              <TiSocialYoutubeCircular className="social-link-icon" />
            </a>
          </li>
          <li className="social-icons">
            <a href="#">
              <ImInstagram className="social-link-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="sub-footer">
        <div className="sub-footer-menu-1">
          <div className="location">
            <a href="#">
              <HiOutlineMapPin />
            </a>
            <span className="country-pin">India</span>
          </div>
          <div className="copyright-sms">
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>
        </div>
        <div className="sub-footer-menu-2">
          <ul>
            <li>
              <a href="/">Guides</a>
            </li>
            <li>
              <a href="#">Terms of Sale</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Nike Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
