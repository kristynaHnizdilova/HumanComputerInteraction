import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/WelcomeScreen.css";

export const WelcomeScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/loged-user");
  }, [navigate]);

  const onRegisterButtonClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="welcome-screen-div">
      <div className="rectangle-div" />
      <img className="home-1-icon" alt="" src="home-1@2x.png" />
      <div className="welcome-to-smarthome-applicati">
        Welcome to SmartHome Application
      </div>
      <div className="please-log-in">Please Log in</div>
      <div className="rectangle-div1" />
      <div className="rectangle-div2" />
      <button className="rectangle-button" onClick={onRectangleButtonClick} />
      <div className="email-div">Email</div>
      <div className="password-div">Password</div>
      <div className="login-div">Login</div>
      <button className="register-button" onClick={onRegisterButtonClick}>
        Register
      </button>
    </div>
  );
};
