import React from "react";
import iconStar from "../images/icon-star.svg";

export default class RatingComponent extends React.Component {
  render() {
    return (
      <div>
        <img src={iconStar} alt="" />
        <h1>How did we do ?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering !
        </p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div>Submit</div>
      </div>
    );
  }
}
