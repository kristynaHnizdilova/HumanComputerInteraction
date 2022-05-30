import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/DressingRoomDetail.css";
import Slider from "@mui/material/Slider";
import {Switch} from "@mui/material";

export const DressingRoomDetail: FunctionComponent = () => {
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
    <div className="dressing-room-detail">
      <div className="rectangle-div25" />
      <div className="dressing-room-div">Dressing room</div>
      <img className="group-icon2" alt="" src="group-2.svg" />
      <div className="image-3-div" />
      <div className="rectangle-div26" />
      <div className="doors-div2">Doors</div>
      <div className="lights-div2">Lights</div>
      <div className="temperature-div2">Temperature</div>
      <div className="wardrobe-div">Wardrobe</div>
      <div className="music-div2">Music</div>
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

        <img className="image-5-icon" alt="" src="image-5@2x.png" />
      <button className="back-button2" onClick={onBackButtonClick}>
        <div className="main-color-div2" />
        <div className="shadow-dark-div2" />
        <div className="shadow-light-div2" />
        <div className="dark-area-div2" />
        <b className="back1">BACK</b>
      </button>
    </div>
  );
};
