import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/WashingMachineSettings.css";

export const WashingMachineSettings: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBACKTextClick = useCallback(() => {
    navigate("/bedroom-2-detail");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/bedroom-2-detail");
  }, [navigate]);

  return (
    <div className="washing-machine-settings">
      <div className="rectangle-div31" />
      <div className="washing-machine-settings1">Washing Machine settings</div>
      <img className="group-icon5" alt="" src="group-2.svg" />
      <div className="image-3-div3" />
      <img className="image-7-icon" alt="" src="image-7@2x.png" />
      <button className="back-button5" onClick={onBackButtonClick}>
        <div className="main-color-div5" />
        <div className="shadow-dark-div5" />
        <div className="shadow-light-div5" />
        <div className="dark-area-div5" />
        <b className="back4" onClick={onBACKTextClick}>
          BACK
        </b>
      </button>
    </div>
  );
};
