import React from "react";
import iconStar from "../images/icon-star.svg";
import {
  DivButton,
  Li,
  MainDiv,
  RatingSection,
  StarImg,
  Ul,
} from "../styled-components/RatingComponent";

export default class RatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : null}
    this.ChoosingValue = this.ChoosingValue.bind(this);
  }


  ChoosingValue(e) {
    this.setState({value : e.target.value})
  }
 

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
            <Li value={1} onClick={this.ChoosingValue}>
              1
            </Li>
            <Li value={2} onClick={this.ChoosingValue}>
              2
            </Li>
            <Li value={3} onClick={this.ChoosingValue}>
              3
            </Li>
            <Li value={4} onClick={this.ChoosingValue}>
              4
            </Li>
            <Li value={5} onClick={this.ChoosingValue}>
              5
            </Li>
          </Ul>
          <p>You click on {this.state.value}</p>
          <DivButton>Submit</DivButton>
        </RatingSection>
      </MainDiv>
    );
  }
}
