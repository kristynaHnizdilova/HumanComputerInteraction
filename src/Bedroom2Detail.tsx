import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Bedroom2Detail.css";
import {Switch} from "@mui/material";
import Slider from "@mui/material/Slider";

export const Bedroom2Detail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/loged-user");
  }, [navigate]);

  const onOldButtonTextClick = useCallback(() => {
    navigate("/washing-machine-settings");
  }, [navigate]);
    const marks1 = [
        {
            value: 16,
            label: '16°C',
        },
        {
            value: 30,
            label: '30°C',
        },
    ];

  return (
    <div className="bedroom-2-detail">
      <div className="rectangle-div29" />
      <div className="bedroom-2-div">Bedroom 2</div>
      <img className="group-icon4" alt="" src="group-2.svg" />
      <div className="image-3-div2" />
      <div className="rectangle-div30" />
      <div className="doors-div4">Doors</div>
      <div className="lights-div4">Lights</div>
      <div className="temperature-div4">Temperature</div>
      <div className="tv-div2">TV</div>
      <div className="music-div4">Music</div>
      <div className="line-div12">
          <Slider
              aria-label="Always visible"
              defaultValue={20}
              step={1}
              valueLabelDisplay="on"
              marks={marks1}
              min={16}
              max={30}
          />
      </div>
        <div
            className="toggle-indeterminate-icon19"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon20"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon21"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon22"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon23"
        ><br/>
            <Switch/>
        </div>
        <button className="back-button4" onClick={onBackButtonClick}>
        <div className="main-color-div4" />
        <div className="shadow-dark-div4" />
        <div className="shadow-light-div4" />
        <div className="dark-area-div4" />
        <b className="back3">BACK</b>
      </button>
      <div className="wardrobe-div2">Wardrobe</div>
      <div className="washing-machine-div">Washing machine</div>
      <button className="old-button-text" onClick={onOldButtonTextClick}>
        <div className="settings-div">Settings</div>
      </button>
      <img className="untitled-1-1-icon" alt="" src="untitled1-1@2x.png" />
    </div>
  );
};
