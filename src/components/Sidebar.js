import { Link, NavLink, Route, Routes } from "react-router-dom";
import dashboardImg from "../img/dashboard.svg";
import darsJadvali from "../img/dars_jadvali.svg";
import dashboardLogo from "../img/dashboard_logo.svg";
import guruhlarImg from "../img/guruhlar.svg";
import oquvchilarImg from "../img/o'quvchilar.svg";
import sozlamalarImg from "../img/sozlamalar.svg";
import yordamImg from "../img/yordam.svg";
import { useState } from "react";
import { Bugalteriya, Dashboard, Guruhlar, Oquvchilar, Sozlamalar, Yordam } from "../pages_sitebar";

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      to: "/",
      name: "Control",
      photo: dashboardImg,
    },
    {
      to: "/guruhlar",
      name: "Guruhlar",
      photo: guruhlarImg,
    },
    {
      to: "/oquvchilar",
      name: "O'qubchilar",
      photo: oquvchilarImg,
    },
    {
      to: "/bugalteriya",
      name: "Dars jadvali",
      photo: darsJadvali,
    },
    {
      to: "/sozlamalar",
      name: "Sozlamalar",
      photo: sozlamalarImg,
    },
    {
      to: "/yordam",
      name: "Yordam",
      photo: yordamImg,
    },
  ];
  return (
    <>
      <div className="containerr">
        <div style={{ width: isOpen ? "300px" : "102px" }} className="sidebar">
          <div className="top_section">
            <div className="bars">
              <img
                style={{ marginLeft: isOpen ? "0px" : "5px" }}
                src={dashboardLogo}
                onClick={toggle}
              />
              <h2
                style={{ display: isOpen ? "block" : "none" }}
                onClick={toggle}
                className="logo"
              >
                Dashboard
              </h2>
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className="link"
              // activeclassName="active"
            >
              <div className="icon">
                <img src={item.photo} />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main style={{padding: "0"}}>{children}</main>
      </div>

    </>
  );
};
