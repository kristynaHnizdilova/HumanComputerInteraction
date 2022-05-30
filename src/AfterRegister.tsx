import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/AfterRegister.css";

export const AfterRegister: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="after-register-div">
      <div className="rectangle-div9" />
      <img className="home-1-icon2" alt="" src="home-1@2x.png" />
      <div className="registration-div1">Registration</div>
      <div className="rectangle-div10" />
      <div className="rectangle-div11" />
      <div className="rectangle-div12" />
      <div className="rectangle-div13" />
      <div className="rectangle-div14" />
      <div className="password-div2">Password</div>
      <div className="name-and-surname1">Name and Surname</div>
      <div className="email-div2">Email</div>
      <div className="password-again-div1">Password again</div>
      <div className="register-div2">Register</div>
      <div className="login-div1">Login</div>
      <div className="rectangle-div15" />
      <div className="rectangle-div16" />
      <button className="rectangle-button2" onClick={onRectangleButtonClick} />
      <div className="got-it-div">Got it</div>
      <div className="you-have-been-successfully-reg">
        <p className="you-have-been">You have been successfully registered.</p>
        <p className="you-have-been">Please wait for the welcome email.</p>
        <p className="your-flat-plan">Your flat plan is being prepared.</p>
      </div>
    </div>
  );
};
