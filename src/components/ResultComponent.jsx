import React from "react";
import thxImage from "../images/illustration-thank-you.svg";

import { SuccessP, MainDiv } from "../styled-components/ResultComponent";

const ResultComponent = ({ note, success }) => {
  return (
    <MainDiv>
      <img src={thxImage} alt="" />
      {success ? <SuccessP>{success}</SuccessP> : null}
      <p>You selected {note} out of 5</p>
      <h1>Thank You</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch !
      </p>
    </MainDiv>
  );
};

export default ResultComponent;
