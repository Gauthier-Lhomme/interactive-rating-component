import React from "react";
import iconStar from "../images/icon-star.svg";
import { DivButton, Li, MainDiv, RatingSection, StarImg, Ul } from "../styled-components/RatingComponent";

export default class RatingComponent extends React.Component {
  render() {
    return (
      <MainDiv>
        <RatingSection>
          <StarImg src={iconStar} alt="" />
          <h1>How did we do ?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering !
          </p>
          <Ul>
            <Li>1</Li>
            <Li>2</Li>
            <Li>3</Li>
            <Li>4</Li>
            <Li>5</Li>
          </Ul>
          <DivButton>Submit</DivButton>
        </RatingSection>
      </MainDiv>
    );
  }
}
