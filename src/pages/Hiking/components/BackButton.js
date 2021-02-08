import { useHistory } from "react-router-dom";

import arrow from '../assets/material-icons-black-arrow-back.svg';

function BackButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <img src={arrow} alt="arrow" className="MaterialIcons-blackArrow-back" onClick={handleClick}/>
  );
}

export default BackButton;