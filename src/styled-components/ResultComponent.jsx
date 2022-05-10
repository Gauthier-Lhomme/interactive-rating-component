import styled from "styled-components";
import { Device } from "../asset/device";

export const MainDiv = styled.div`
  background-color: hsl(216, 12%, 8%);
  color: white;
  padding-top: 26vh;
  min-height: 90vh;
  @media ${Device.mobile} {
    margin: 0;
    padding: 0;
    padding: 25.9vh 0vh;
    min-height: 50vh;  
;

  }
`;

export const ConfirmImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media ${Device.mobile} {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SuccessP = styled.p`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
`;

export const ResultSection = styled.section`
  margin: 0 auto;
  background-color: #1e252e;
  padding: 3vh;
  width: 40vh;
  border-radius: 25px;
  @media ${Device.mobile} {
    margin: 0 auto;
  }
`;

export const NoteP = styled.p`
  color: #cc8a0f;
  background-color: #1214174b;
  margin: 0 auto;
  margin-top: 2vh;
  text-align: center;
  border-radius: 25px;
  font-weight: bold;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  @media ${Device.mobile} {
    width: 58vw;
  }
`;

export const P = styled.p`
  text-align: center;
  color: #8c8f94;
`;
