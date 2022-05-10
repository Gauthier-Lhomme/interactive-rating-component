import RatingComponent from "./components/RatingComponent";
import Footer from "./components/Footer";
import { MainDiv } from "./styled-components/App";
import { useState } from "react";
import ResultComponent from "./components/ResultComponent";

export default function App() {
  const [note, setNote] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    if (note >= 1 || note <= 5) {
      setSuccess("Thank you");
      setIsSubmit(!isSubmit);
      return true;
    }

    setError("Please choose a rating");

    return false;
  };

  return (
    <MainDiv>
      {!isSubmit ? (
        <RatingComponent
          error={error}
          note={note}
          setNote={setNote}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ResultComponent note={note} success={success} />
      )}
      <Footer />
    </MainDiv>
  );
}
