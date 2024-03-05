import { HiOutlineMapPin } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container  px-[15px]">
      <div className="footer-body m-0 block justify-between sm:flex sm:justify-between">
        <div className="hf-accordion-body pt-8">
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
        <div className="hf-accordion-body pt-8 block sm:hidden">
          <AccordionGroup
            sx={{
              maxWidth: 400,
              [`& .${accordionSummaryClasses.indicator}`]: {
                transition: "0.2s",
              },
              [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
                {
                  transform: "rotate(45deg)",
                },
              width: "100%",
            }}
          >
            <Accordion>
              <AccordionSummary indicator={<AddIcon />}>
                <li className="footer-link">
                  <a href="#">GET HELP</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li className="footer-linkes">
                    <Link to={"/orders"}>Order Status</Link>
                  </li>
                  <li className="footer-linkes">
                    <Link to={"/orders"}>Delivery</Link>
                  </li>
                  <li className="footer-linkes">
                    <Link to={"/orders"}>Returns</Link>
                  </li>
                  <li className="footer-linkes">
                    <Link to={"/payment"}>Payment Options</Link>
                  </li>
                  <li className="footer-linkes">
                    <a href="https://www.nike.com/in/help/#contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary indicator={<AddIcon />}>
                <li className="footer-link">
                  <a href="#">ABOUT NIKE</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
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
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </div>

        <div className="hf-accordion-body hidden sm:flex pt-[32px]">
          <div>
            <li className="footer-link">
              <a href="#">GET HELP</a>
            </li>
            <ul>
              <li className="footer-linkes">
                <Link to={"/orders"}>Order Status</Link>
              </li>
              <li className="footer-linkes">
                <Link to={"/orders"}>Delivery</Link>
              </li>
              <li className="footer-linkes">
                <Link to={"/orders"}>Returns</Link>
              </li>
              <li className="footer-linkes">
                <Link to={"/payment"}>Payment Options</Link>
              </li>
              <li className="footer-linkes">
                <a href="https://www.nike.com/in/help/#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hf-accordion-body hidden sm:flex pt-[32px]">
          <div className="column">
            <li className="footer-link">
              <a href="#">ABOUT NIKE</a>
            </li>
            <ul>
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
        </div>
        <div>
          <ul className="social-links block sm:flex gap-3">
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
            <li className="social-icons ">
              <Link
                className="cursor-pointer"
                to="https://www.youtube.com/user/nike"
              >
                <TiSocialYoutubeCircular className="social-link-icon cursor-pointer " />
              </Link>
            </li>
            <li className="social-icons">
              <Link to="https://www.instagram.com/nike">
                <ImInstagram className="social-link-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="block sm:flex sm:justify-between">
        <div className="sub-footer-menu-1 pt-6 block sm:flex md:flex w-full">
          <div className="location flex">
            <a href="#" className="flex justify-center">
              <HiOutlineMapPin />
            </a>
            <div className="country-pin">India</div>
          </div>
          <div className="copyright-sms w-full block sm:flex">
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>
        </div>
        <div className="sub-footer-menu-2 pt-4 pb-4 block sm:flex md:flex">
          <ul className="block sm:flex">
            <li className="block sm:flex p-[8px]">
              <a href="/">Guides</a>
            </li>
            <li className="block sm:flex p-[8px]">
              <Link to="https://www.eshopworld.com/shoppers/help/retailer/nike/terms-and-conditions-of-sale-en/">
                Terms of Sale
              </Link>
            </li>
            <li className="block sm:flex p-[8px]">
              <Link to="https://agreementservice.svs.nike.com/in/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike&country=IN&language=en&requestType=redirect">
                Terms of Use
              </Link>
            </li>
            <li className="block sm:flex p-[8px]">
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
