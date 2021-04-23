import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import QuestionQ from "../../Question/QuestionQ";

import "./Quiz.css";

function Quiz({ name, score, questions, setQuestions, setScore }) {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  //when any cat or diifficulty change
  useEffect(() => {
    // console.log(questions);
    setOptions(
      questions &&
        //for answers
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  //console.log(questions);
  //create for shuffling quest
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome- {name} for Test</span>
      {
        //for the quest
        questions ? (
          <>
            <div className="quizInfo">
              {/* info of user  */}
              <span>{questions[currQues].category}</span>
              <span>Score:{score}</span>
            </div>
            <QuestionQ
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          //loader -progress bar
          <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
          />
        )
      }
    </div>
  );
}

export default Quiz;
