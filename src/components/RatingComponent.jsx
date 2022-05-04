import React from "react";
import iconStar from "../images/icon-star.svg";
import {
  Button,
  ButtonNumber,
  ButtonsContainer,
  MainDiv,
  RatingSection,
  StarImg,
} from "../styled-components/RatingComponent";

export default function RatingComponent({note,setNote,handleSubmit}) {
    return (
      <MainDiv>
        <RatingSection>
          <StarImg src={iconStar} alt="" />
          <h1>How did we do ?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering !
          </p>
          <ButtonsContainer>
            <ButtonNumber  onClick={()=> setNote(1)}>
              1
            </ButtonNumber>
            <ButtonNumber  onClick={()=> setNote(2)} >
              2
            </ButtonNumber >
            <ButtonNumber  onClick={()=> setNote(3)}>
              3
            </ButtonNumber>
            <ButtonNumber  onClick={()=> setNote(4)}>
              4
            </ButtonNumber>
            <ButtonNumber onClick={()=> setNote(5)}>
              5
            </ButtonNumber>
          </ButtonsContainer>
          <p>You click on {note}  </p>
          <Button
          onClick={handleSubmit(true)}
          
          >Submit</Button>
        </RatingSection>
      </MainDiv>
    );
  }

