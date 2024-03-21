import React from "react";

import { authService } from "../../../services/auth/auth.services";
import { useNavigate } from "react-router-dom";
import useicon from "../../../assets/images/useicon.png";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg z-index-1 fixed-top bg-body-tertiary  nav-color nav-style">
      <div className="container-fluid">
        <div class="btn-group right-align">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle custom-button"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <img src={useicon} alt="" width="22px" height="26px" />
            <span className="ms-1 color-black"> Developer</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end ">
            <li>
              <button class="dropdown-item" type="button">
                <i class="fa-solid fa-user me-1"></i> <span>User Profile</span>
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                type="button"
                onClick={handleLogout}
              >
                <i class="fa-solid fa-right-from-bracket me-1"></i>
                <span> Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
