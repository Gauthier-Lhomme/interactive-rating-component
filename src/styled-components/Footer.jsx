import styled from "styled-components";
import { Device } from "../asset/device";

export const Div = styled.div`
  font-size: 11px;
  text-align: center;
  color: whitesmoke ;
  margin-left: 1vw ;
  @media ${Device.mobile}{
    margin: 0 auto ;
  }
`;

export const A = styled.a`
  color: hsl(228, 45%, 44%);
`;
