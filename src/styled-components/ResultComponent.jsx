import styled from "styled-components";
import { Device } from "../asset/device";

export const ConfirmImg = styled.img`
margin-left:4.7vw;
margin-top: 2vh;
margin-bottom: 2vh;
@media ${Device.mobile}{
margin-left: 8vw ;
  }
`

export const MainDiv = styled.div`
  background-color: hsl(216, 12%, 8%);
  margin-left: 25vw;
  padding: 30vh;
  padding-top: 2vh ;
  color: white;
  @media ${Device.mobile}{
margin: 0;
padding:0 ;
padding: 25.8vh 0vh;

  }
`;

export const SuccessP = styled.p`
  color: white;
  text-align: center;
  font-weight: bold ;
  font-size: 22px ;

`;

export const ResultSection = styled.section`
  background-color: #1b2129;
  padding: 3vh;
  height: 100%;
  width: 40vh;
  border-radius: 25px;
  @media ${Device.mobile}{
    margin: 0 auto ;
  }
`;

export const NoteP = styled.p`
  color: #cc8a0f;
  background-color: #1214174b;
  margin: 0 auto;
  text-align: center ;
  border-radius: 25px;
  font-weight: bold;
  padding-top: 0.5vh ;
  padding-bottom:0.5vh ;
  @media ${Device.mobile}{
    width: 25vw;


  }
`;

export const P = styled.p`
text-align: center ;
color: #8c8f94;
`