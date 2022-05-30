import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Register.css";

export const Register: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/after-register");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="register-div">
      <div className="rectangle-div4" />
      <img className="home-1-icon1" alt="" src="home-1@2x.png" />
      <div className="registration-div">Registration</div>
      <div className="rectangle-div5" />
      <div className="rectangle-div6" />
      <div className="rectangle-div7" />
      <div className="rectangle-div8" />
      <button className="rectangle-button1" onClick={onRectangleButtonClick} />
      <div className="password-div1">Password</div>
      <div className="name-and-surname">Name and Surname</div>
      <div className="email-div1">Email</div>
      <div className="password-again-div">Password again</div>
      <div className="register-div1">Register</div>
      <button className="login-button" onClick={onLoginButtonClick}>
        Login
      </button>
    </div>
  );
};
