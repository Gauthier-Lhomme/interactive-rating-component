import styled from "styled-components";
import { Device } from "../asset/device";

export const MainDiv = styled.div`
  background-color: hsl(216, 12%, 8%);
  margin-left: 25vw;
  padding: 30vh;
  padding-top: 29.3vh ;
  color: white;  
  @media ${Device.mobile}{
margin: 0;
padding:0 ;
padding: 26.1vh 0vh;

  }
`;

export const ErrorP = styled.p`
  border: 1px solid red;
  color: red;
  background: rgb(254, 140, 140);
  display: flex;
  margin: 0 auto;
  padding: 10px;
`;

export const RatingSection = styled.section`
  background-color: #1e252e;
  padding: 3vh;
  width: 40vh;
  border-radius: 25px;
  @media ${Device.mobile}{
    margin: 0 auto ;
  }
`;

export const StarImg = styled.img`
  background-color: hsl(217, 12%, 63%);
  padding: 1vh;
  border-radius: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  list-style: none;
  margin-bottom: 4vh ;
  padding: 0;
`;
export const ButtonNumber = styled.button`
  padding: 1vh 2vh;
  width: 3rem;
  height: 3rem;
  background-color: #323842;
  color: #a09c9c;
  border-radius: 50%;
  outline: none;
  border: none;
  margin-right: 2vh;
  margin-left: 0.5vh;
  &:focus {
    background-color: white;
  }
  &:hover {
    cursor: pointer;
    color: white ;
    background-color: #cc8a0f;
  }
`;

export const Button = styled.button`
  background-color: #cc8a0f;
  color: white ;
  text-align: center;
  margin-right: 2vh;
  font-size: 2vh;
  border-radius: 25px;
  padding: 1vh 13vh;
  display: flex ;
  margin: 0 auto ;
  width: max-content ;
  border-style: none ;
  &:hover {
    background-color: white;
    color: #cc8a0f;
    cursor: pointer;
  }
`;
