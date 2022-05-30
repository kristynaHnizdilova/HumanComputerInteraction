import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Bedroom1Detail.css";
import Slider from "@mui/material/Slider";
import {Switch} from "@mui/material";

export const Bedroom1Detail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/loged-user");
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
    <div className="bedroom-1-detail">
      <div className="rectangle-div27" />
      <div className="bedroom-1-div">Bedroom 1</div>
      <img className="group-icon3" alt="" src="group-2.svg" />
      <div className="image-3-div1" />
      <div className="rectangle-div28" />
      <div className="doors-div3">Doors</div>
      <div className="lights-div3">Lights</div>
      <div className="temperature-div3">Temperature</div>
      <div className="tv-div1">TV</div>
      <div className="music-div3">Music</div>
        <div className="line-div10" >
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
            className="toggle-indeterminate-icon10"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon11"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon12"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon13"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon18"
        ><br/>
            <Switch/>
        </div>
      <button className="back-button3" onClick={onBackButtonClick}>
        <div className="main-color-div3" />
        <div className="shadow-dark-div3" />
        <div className="shadow-light-div3" />
        <div className="dark-area-div3" />
        <b className="back2">BACK</b>
      </button>
      <img className="image-6-icon" alt="" src="image-6@2x.png" />
      <div className="wardrobe-div1">Wardrobe</div>
    </div>
  );
};
