import styled from "styled-components";

export const MainDiv = styled.div`
background-color: hsl(216, 12%, 8%) ;
margin-left: 25vw ;
padding: 30vh ;
color: white ;
`;

export const RatingSection = styled.section`
background-color: hsl(213, 19%, 18%) ;
padding: 3vh ;
height: 100% ;
width: 40vh ;
border-radius: 25px ;
`

export const StarImg = styled.img`
background-color: hsl(217, 12%, 63%) ;
padding: 1vh ;
border-radius: 100%;
`

export const Ul = styled.ul`
display: flex ;
list-style: none ;
padding: 0;
`
export const Li = styled.li`
padding: 1vh 2vh ;
background-color: hsl(217, 12%, 63%) ;
border-radius: 100%;
margin-right: 2vh ;
margin-left: 0.5vh ;
&:hover{
    cursor: pointer;
    background-color: #cc8a0f ;
};
`

export const DivButton = styled.div`
background-color: #cc8a0f ;
text-align: center ;
margin-right: 2vh ;
font-size: 2vh ;
border-radius: 25px ;
padding : 1vh 0;
font-weight: bold ;
&:hover{
    background-color : white ;
    color: #cc8a0f ;
    cursor: pointer;  
}
`

