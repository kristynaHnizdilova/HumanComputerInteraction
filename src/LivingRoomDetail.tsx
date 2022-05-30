import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/LivingRoomDetail.css";
import {Switch} from "@mui/material";
import Slider from "@mui/material/Slider";

export const LivingRoomDetail: FunctionComponent = () => {
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
    const marks2 = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 250,
            label: '250°C',
        },
    ];

  return (
    <div className="living-room-detail">
      <div className="rectangle-div21" />
      <div className="living-room-and-kitchen">Living room and kitchen</div>
      <img className="group-icon" alt="" src="group-2.svg" />
      <img className="image-3-icon" alt="" src="image-3@2x.png" />
      <div className="rectangle-div22" />
      <div className="doors-div">Doors</div>
      <div className="lights-div">Lights</div>
      <div className="temperature-div">Temperature</div>
      <div className="tv-div">TV</div>
      <div className="music-div">Music</div>
      <div className="oven-div">Oven</div>
        <div className="line-div7">
            <Slider
                aria-label="Always visible"
                defaultValue={200}
                step={10}
                min={0}
                max={250}
                marks={marks2}
                valueLabelDisplay="on"
            />
        </div>
        <div className="line-div8">
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
        className="toggle-indeterminate-icon"
      ><br/>
      <Switch/>
      </div>
        <div
            className="toggle-indeterminate-icon1"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon2"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon3"
        ><br/>
            <Switch/>
        </div>
        <div
            className="toggle-indeterminate-icon4"
        ><br/>
            <Switch/>
        </div>

        <button className="back-button" onClick={onBackButtonClick}>
        <div className="main-color-div" />
        <div className="shadow-dark-div" />
        <div className="shadow-light-div" />
        <div className="dark-area-div" />
        <b className="back">BACK</b>
      </button>
    </div>
  );
};
