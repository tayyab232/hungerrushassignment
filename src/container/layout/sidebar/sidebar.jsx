import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaStore,
  FaUser,
  FaInbox,
  FaTable,
  FaPoll,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { useScreenSize } from "../../../shared/hooks/useScreenSize";
import hungerRushLogo from "../../../assets/images/hungerRushLogo.webp";
import NavBar from "../navBar/navBar";
import MessageIcon from "@mui/icons-material/Message";
import sort from "../../../assets/images/sort.png";

const Sidebar = ({ children, sidebar }) => {
  const [screenWidth] = useScreenSize();
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      path: "/",
      name: "Brands",
      icon: <FaStore />,
    },
    {
      path: "/performance",
      name: "Performance",
      icon: <FaPoll />,
    },
    {
      path: "/UserPermissions",
      name: "User Permissions",
      icon: <FaUser />,
    },
    {
      path: "/activityLogs",
      name: "Activity Logs",
      icon: <FaTable />,
    },
    {
      path: "/surveyQueues",
      name: "Survey Queues",
      icon: <FaInbox />,
    },
  ];

  useEffect(() => {
    if (screenWidth <= 600) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [screenWidth]);

  return (
    <div>
      <NavBar />

      <div className={`sidebar ${isOpen ? "width-200" : "width-75"} `}>
        <div
          className={`bars ${
            isOpen ? "bars-open-margin" : "bars-close-margin "
          } `}
        >
          <img
            className="pointer "
            src={sort}
            alt=""
            width="30px"
            height="30px"
            onClick={toggle}
          />
        </div>
        <div className="top_section margin-top-n13">
          <h1 className="logo">
            <img src={hungerRushLogo} alt="" width="50px" height="50px" />
            <span
              className={`logo-text   ${isOpen ? "d-block-inline" : "d-none"} `}
            >
              360 Marketing
            </span>
          </h1>
        </div>

        <ul className="nav-list">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="linknav mt-1"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                className={`link_text ${
                  isOpen ? "display-block " : "display-none "
                } `}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
          <li
            className={`linknav fixed-bottom  ${
              isOpen ? "bottom-open-width" : "bottom-close-width"
            } `}
          >
            <div className="  pointer">
              <MessageIcon />
              <span
                className={`link_text ms-1 ${
                  isOpen ? "d-block-inline" : "d-none"
                } `}
              >
                Request Help
              </span>
            </div>
          </li>
        </ul>
      </div>
      <main
        className={`container-backGround-color mt-5 ${
          screenWidth <= 460
            ? isOpen
              ? "margin-left-90 width-100-90"
              : "margin-left-90 width-100-90"
            : isOpen
            ? "margin-left-220 width-100-220"
            : "margin-left-90 width-100-90"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
