import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ButtonComponet } from "../systemComponents/systemComponents";
import { FormWrapper } from "../wrapperComponents/wrapperComponents";
import { authActions } from "../../../redux/actions/auth.action/auth.actions";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    props.login(data, navigate);
  };
  return (
    <div>
      <form
        action="#"
        noValidate
        className="ViewUserContent"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="field mt-3">
          <FormWrapper label={"Your Email"}>
            <Form.Control
              className={`form-style form-control light-black  ${
                errors.email ? "error-border" : ""
              }`}
              {...register("email", {
                required: "Email is Required",

                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/i,
                  message: "invalid Email",
                },
              })}
              id="email"
              placeholder="example@company.com"
              type="email"
            />
          </FormWrapper>
        </div>

        <div className="mt-3">
          <Form.Label className="labels light-black">Your Password</Form.Label>
          <InputGroup
            className={` border-3 light-black  ${
              errors.password ? "error-border" : ""
            }`}
          >
            <input
              className={`form-control light-black  ${
                errors.password ? "error-border" : ""
              }`}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^\s*[^\s]+(?:\s+[^\s]+)*\s*$/,
                  message: "Invalid password",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
            />
            <InputGroup.Text id="basic-addon1" className="pointer">
              <i
                className={`fa-solid fa-eye${showPassword ? "-slash" : ""}`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="d-flex justify-content-center ">
          <ButtonComponet>
            {[props.loading ? <Spinner animation="border" /> : "Sign In"]}
          </ButtonComponet>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  login: (data, navigate) => dispatch(authActions.login(data, navigate)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
