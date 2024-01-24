import { HiOutlineMapPin } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container w-full pb-0">
      <div className="footer-body m-0">
        <div className="hf-accordion-body">
          <ul>
            <li className="footer-link">
              <a href="https://www.nike.com/in/retail">FIND A STORE</a>
            </li>
            <li className="footer-link">
              <a href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=435d2c2b0c804008826debbf06af93ed&code_challenge=C6rQnvhcHFaAM7fBq2PWLt8rGY643aauhJ-e43o_8pU&code_challenge_method=S256">
                BECOME A MEMBER
              </a>
            </li>
            <li className="footer-link">
              <a href="#">Send Us Feedback</a>
            </li>
          </ul>
        </div>
        <div className="hf-accordion-body">
          <ul>
            <li className="footer-link">
              <a href="https://www.nike.com/in/help">GET HELP</a>
            </li>
            <li className="footer-linkes">
              <a href="https://www.nike.com/orders/details/">Order Status</a>
            </li>
            <li className="footer-linkes">
              <a href="https://www.nike.com/in/help/a/shipping-delivery-gs">
                Delivery
              </a>
            </li>
            <li className="footer-linkes">
              <a href="https://www.nike.com/in/help/a/returns-policy-gs">
                Returns
              </a>
            </li>
            <li className="footer-linkes">
              <a href="https://www.nike.com/in/help/a/payment-options-gs">
                Payment Options
              </a>
            </li>
            <li className="footer-linkes">
              <a href="https://www.nike.com/in/help/#contact">
                Contact Us On Nike.com Inquiries
              </a>
            </li>
            <li className="footer-linkes">
              <a href="https://www.nike.com/in/help/a/india-consumer-care-policy">
                Contact Us On All Other Inquiries
              </a>
            </li>
          </ul>
        </div>
        <div className="hf-accordion-body">
          <ul>
            <li className="footer-link">
              <a href="https://about.nike.com/en">ABOUT NIKE</a>
            </li>
            <li className="footer-linkes">
              <a href="https://about.nike.com/en/newsroom">News</a>
            </li>
            <li className="footer-linkes">
              <a href="https://jobs.nike.com/">Careers</a>
            </li>
            <li className="footer-linkes">
              <a href="https://investors.nike.com/Home/default.aspx">
                Investors
              </a>
            </li>
            <li className="footer-linkes">
              <a href="https://www.nike.com/in/sustainability">
                Sustainability
              </a>
            </li>
          </ul>
        </div>

        <ul className="social-links">
          <li className="social-icons">
            <Link to="https://twitter.com/Nike">
              <FaTwitter className="social-link-icon" />
            </Link>
          </li>
          <li className="social-icons">
            <Link to="https://www.facebook.com/nike">
              <FaFacebookF className="social-link-icon" />
            </Link>
          </li>
          <li className="social-icons">
            <Link to="https://www.youtube.com/user/nike">
              <TiSocialYoutubeCircular className="social-link-icon" />
            </Link>
          </li>
          <li className="social-icons">
            <Link to="https://www.instagram.com/nike">
              <ImInstagram className="social-link-icon" />
            </Link>
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
              <Link to="https://www.eshopworld.com/shoppers/help/retailer/nike/terms-and-conditions-of-sale-en/">
                Terms of Sale
              </Link>
            </li>
            <li>
              <Link to="https://agreementservice.svs.nike.com/in/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike&country=IN&language=en&requestType=redirect">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="https://agreementservice.svs.nike.com/sg/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=SG&language=en&requestType=redirect">
                Nike Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
