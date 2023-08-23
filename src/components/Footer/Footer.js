import { NavLink, Route, Routes } from "react-router-dom";
import { AboutUs, Comment, Contact, Home, Service } from "../../pages";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_inner">
            <div className="footer_left">
              <p className="footer_logo">Tarjimon uchun</p>
              <p className="footer_text">
                Lectus ac pulvinar tincidunt accumsan ulla lectus facilis
                isaclect Molestieuam ublandit vulputatctus in sit egestas dolor
                purus tincidunt.
              </p>
            </div>
            <div className="footer_right">
              <div className="footer_div">
                <p className="footer_right_title">Menu</p>
                <ul className="footer_list">
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/aboutUs">
                      About Us
                    </NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/servise">
                      Servise
                    </NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/comment">
                      Comment
                    </NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer_div">
                <p className="footer_right_title">Services</p>
                <ul className="footer_list">
                  <li className="footer_item">
                    <NavLink className="footer_link">Translation Service</NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link">Business Translation</NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link">Legal Translation</NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link">Medical Translation</NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link">Document Translation</NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link">Professional Translation</NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer_div">
                <p className="footer_right_title">Contact</p>
                <ul className="footer_list">
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/#">
                      Ins
                    </NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/#">
                      Tel
                    </NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/#">
                      Fac
                    </NavLink>
                  </li>
                  <li className="footer_item">
                    <NavLink className="footer_link" to="/#">
                      Twi
                    </NavLink>
                  </li>
                </ul>
                <ul className="footer_left_bottom_list">
                  <li className="footer_left_bottom_item">
                    <NavLink className="footer_link" to="/#">
                      Em
                    </NavLink>
                  </li>
                  <li className="footer_left_bottom_item">
                    <NavLink className="footer_link" to="/#">
                      Tel
                    </NavLink>
                  </li>
                  <li className="footer_left_bottom_item">
                    <NavLink className="footer_link" to="/#">
                      Lan
                    </NavLink>
                  </li>
                  <li className="footer_left_bottom_item">
                    <NavLink className="footer_link" to="/#">
                      Lan
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
