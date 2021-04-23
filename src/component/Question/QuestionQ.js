import React, { useState } from "react";
import "./Question.css";
import ErrorMessage from "../../component/ErrorMessage/ErrorMessage";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
function QuestionQ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  // for selection of mcq ans point
  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  //for selction to mcq ans color
  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  //not interested for quiz go to home page
  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  //router histroy hooks
  const history = useHistory();

  // for next question with
  const handleNext = () => {
    if (currQues > 8) {
      history.push("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  return (
    <div>
      <h1> Qustion {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>

        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {/*  for option part */}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected} //one select other disable
              >
                {i}
              </button>
            ))}
        </div>

        <div className="controls">
          {/* button for some use */}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuestionQ;
