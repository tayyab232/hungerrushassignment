import React from "react";
import hungerRush from "../../assets/images/hungerRush.webp";
import hungerRushLogo from "../../assets/images/hungerRushLogo.webp";
import LoginForm from "../../shared/components/loginForm/loginForm";

const Login = () => {
  return (
    <div className="  container-login row">
      <div className="col-12 col-lg-8   d-flex align-items-center justify-content-center ">
        <div className="col-lg-11 col-12  ">
          <div className="col-12 text-center">
            <img src={hungerRush} alt="" width="100%" height="100%" />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 background-color  d-flex flex-column form-container  justify-content-between">
        <div className=" ">
          <div className="row justify-content-center mt-5 text-center">
            <p className="login-header mt-3"> HELLO THERE </p>
            <p className="padding-5rem font-large">
              Welcome back, please enter login information below
            </p>
          </div>
          <div className="  mb-5  form-div">
            <LoginForm />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img src={hungerRushLogo} alt="" width="50px" height="50px" />
          <span className="site-name hunger-color">Hunger</span>
          <span className="site-name rush-color">Rush</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
