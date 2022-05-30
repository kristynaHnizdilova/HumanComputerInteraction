import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Menu.css";

export const Menu: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/loged-user");
  }, [navigate]);

  return (
    <div className="menu-div">
      <img className="image-1-icon1" alt="" src="image-1@2x.png" />
      <div className="rectangle-div17" />
      <div className="name-surname-div1">Name Surname</div>
      <div className="line-div3" />
      <div className="line-div4" />
      <div className="line-div5" />
      <div className="rectangle-div18" />
      <div className="rectangle-div19" />
      <img className="home-2-icon" alt="" src="home-2@2x.png" />
      <div className="smarthome-div">SmartHome</div>
      <div className="line-div6" />
      <button className="rectangle-button3" onClick={onRectangleButtonClick} />
      <div className="st-floor-div">1st floor</div>
      <div className="rectangle-div20" />
      <div className="nd-floor-div">2nd floor</div>
    </div>
  );
};
