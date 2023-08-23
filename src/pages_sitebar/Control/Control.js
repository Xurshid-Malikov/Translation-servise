import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import {
  User,
  Service,
  Social_media,
  Partner,
  Order,
  Location,
  Language,
  Comment,
  Contact,
  // Mesages
} from "../../pages_sitebar";

export const Control = () => {
  return (
    <div>
      <NavC>
        <UlC>
          <LiC>
            <Link className="text-decoration-none text-dark" to="/">User</Link>
          </LiC>
          <LiC>
            <Link className="text-decoration-none text-dark" to="/social-media">Social media</Link>
          </LiC>
          <LiC>
            <Link className="text-decoration-none text-dark" to="/service">Service</Link>
          </LiC>
          <LiC>
            <Link className="text-decoration-none text-dark" to="/partner">Partner</Link>
          </LiC>
          <LiC>
            <Link className="text-decoration-none text-dark" to="/order">Order</Link>
          </LiC>
          {/* <li>
            <Link to="/messages">Messages</Link>
          </li> */}
          <LiC>
            <Link className="text-decoration-none text-dark" to="/location">Location</Link>
          </LiC>
          <LiC>
            <Link className="text-decoration-none text-dark" to="/language">Language</Link>
          </LiC>
          <LiC>
            <Link className="text-decoration-none text-dark" to="/comment">Comment</Link>
          </LiC>
          <LiC>
            <Link className="text-decoration-none text-dark" to="/contact">Contact</Link>
          </LiC>
        </UlC>
      </NavC>

      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/social-media" element={<Social_media />} />
        <Route path="/service" element={<Service />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/messages" element={<Mesages />} /> */}
        <Route path="/location" element={<Location />} />
        <Route path="/language" element={<Language />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const NavC = styled.nav`
  padding: 15px;
  background-color: #f1f1f1;
  box-shadow: 0px 15px 10px -15px #111;
`;
const UlC = styled.ul`
 margin: 0;
 display: flex;
 align-items: center;
`;
const LiC = styled.li`
 margin-right: 30px;
`;
