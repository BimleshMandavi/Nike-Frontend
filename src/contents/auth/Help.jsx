import "./Help.css";

import { CiSearch } from "react-icons/ci";

const Help = () => {
  return (
    <div className="help-container">
      <div className="search-container">
        <div className="headline-1">
          <a href="/help">GET HELP</a>
        </div>
        <div className="search-input">
          <input type="text" placeholder="What we can help you with?" />
        </div>
        <CiSearch className="search-icon"/>
      </div>
      <div className="help-body-cont">
        <div className="headlin-2">
          <h1>QUICK ASSISTS</h1>
          <p>
            Answers to our most frequently asked questions are just one click
            away.
          </p>
        </div>
        <div className="cont-1">
          DISPATCH & DELIVERY
          <ul>
            <li>
              <a href="">What are Nike`s delivery options?</a>
            </li>
            <li>
              <a href="">Can my Nike order be dispatched internationally?</a>
            </li>
            <li>
              <a href="">Does my Nike order need to clear customs?</a>
            </li>
          </ul>
        </div>
        <div className="cont-2">
          RETURNS
          <ul>
            <li>
              <a href="">How do I return my Nike order?</a>
            </li>
            <li>
              <a href="">What is Nike`s returns policy?</a>
            </li>
            <li>
              <a href="">Where is my refund?</a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
        <div className="cont-3">
          NIKE MEMBERSHIP
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
        <div className="cont-4">
          ORDERS
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
        <div className="cont-5">
          PRODUCT INFO
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
        <div className="cont-6">
          CORPORATE
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;
