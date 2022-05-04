import RatingComponent from "./components/RatingComponent";
import Footer from "./components/Footer"
import{ MainDiv } from "./styled-components/App"
import { useState } from "react";

export default function App() {
  const [note, setNote] = useState(3)
  const [isSubmit, setIsubmit] = useState(false)
  return (
  <MainDiv>
      
      <RatingComponent note={note} setNote={setNote} handleSubmit={setIsubmit}/>

      <Footer/>
  </MainDiv>)
  ;
}
