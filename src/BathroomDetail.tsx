import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/BathroomDetail.css";
import Slider from "@mui/material/Slider";
import {Switch} from "@mui/material";

export const BathroomDetail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onButtonTwitterCTAClick = useCallback(() => {
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
    <div className="bathroom-detail-div">
      <div className="rectangle-div23" />
      <div className="bathroom-div">Bathroom</div>
      <img
        className="group-icon1"
        alt=""
        src="group-2.svg"
        onClick={onGroupClick}
      />
      <div className="rectangle-div24" />
      <div className="doors-div1">Doors</div>
      <div className="music-div1">Music</div>
      <div className="lights-div1">Lights</div>
      <div className="temperature-div1">Temperature</div>
      <div className="bath-jets">Bath - jets</div>
      <div className="bath-lights">Bath - Lights</div>
        <div className="line-div9" >
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
            className="toggle-indeterminate-icon5"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon6"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon7"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon8"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon9"
        ><br/>
            <Switch/>
        </div>
        <img className="image-4-icon" alt="" src="image-4@2x.png" />

        <button className="button-twitter-cta" onClick={onButtonTwitterCTAClick}>
        <div className="main-color-div1" />
        <div className="shadow-dark-div1" />
        <div className="shadow-light-div1" />
        <div className="dark-area-div1" />
        <button className="back-button1">BACK</button>
      </button>
    </div>
  );
};
