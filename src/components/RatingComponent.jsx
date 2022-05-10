import React from "react";
import iconStar from "../images/icon-star.svg";
import {
  Button,
  ButtonNumber,
  ButtonsContainer,
  MainDiv,
  RatingSection,
  StarImg,
  ErrorP,
} from "../styled-components/RatingComponent";

const RatingComponent = ({ note, setNote, handleSubmit, error }) => {
  return (
    <MainDiv>
      <RatingSection>
        <StarImg src={iconStar} alt="" />
        {error ? <ErrorP>{error}</ErrorP> : null}
        <h1>How did we do ?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering !
        </p>
        <ButtonsContainer>
          <ButtonNumber onClick={() => setNote(1)}>1</ButtonNumber>
          <ButtonNumber onClick={() => setNote(2)}>2</ButtonNumber>
          <ButtonNumber onClick={() => setNote(3)}>3</ButtonNumber>
          <ButtonNumber onClick={() => setNote(4)}>4</ButtonNumber>
          <ButtonNumber onClick={() => setNote(5)}>5</ButtonNumber>
        </ButtonsContainer>
        <Button onClick={() => handleSubmit(true)}>Submit</Button>
      </RatingSection>
    </MainDiv>
  );
};

export default RatingComponent;
