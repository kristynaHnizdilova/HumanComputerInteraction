import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/LogedUser.css";

export const LogedUser: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onRightArrowButton1Click = useCallback(() => {
    navigate("/living-room-detail");
  }, [navigate]);

  const onRightArrowButton2Click = useCallback(() => {
    navigate("/dressing-room-detail");
  }, [navigate]);

  const onRightArrowButton3Click = useCallback(() => {
    navigate("/bedroom-1-detail");
  }, [navigate]);

  const onRightArrowButton4Click = useCallback(() => {
    navigate("/bathroom-detail");
  }, [navigate]);

  const onRightArrowButton5Click = useCallback(() => {
    navigate("/bedroom-2-detail");
  }, [navigate]);

  return (
    <div className="loged-user-div">
      <img className="image-1-icon" alt="" src="image-1@2x.png" />
      <div className="rectangle-div3" />
      <div className="name-surname-div">Name Surname</div>
      <button className="group-button" onClick={onGroupButtonClick}>
        <div className="line-div" />
        <div className="line-div1" />
        <div className="line-div2" />
      </button>
      <button
        className="right-arrow-button-1"
        onClick={onRightArrowButton1Click}
      />
      <button
        className="right-arrow-button-2"
        onClick={onRightArrowButton2Click}
      />
      <button
        className="right-arrow-button-3"
        onClick={onRightArrowButton3Click}
      />
      <button
        className="right-arrow-button-4"
        onClick={onRightArrowButton4Click}
      />
      <button
        className="right-arrow-button-5"
        onClick={onRightArrowButton5Click}
      />
    </div>
  );
};
