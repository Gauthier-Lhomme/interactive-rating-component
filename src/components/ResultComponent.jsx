import React from "react";
import thxImage from "../images/illustration-thank-you.svg";

import { SuccessP, MainDiv, ResultSection, NoteP, ConfirmImg, P } from "../styled-components/ResultComponent";

const ResultComponent = ({ note, success }) => {
  return (
    <MainDiv>
      <ResultSection>
      <ConfirmImg src={thxImage} alt="" />
      <NoteP>You selected {note} out of 5</NoteP>
      {success ? <SuccessP>{success}</SuccessP> : null}
      <P>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch !
      </P>
      </ResultSection>
    </MainDiv>
  );
};

export default ResultComponent;
