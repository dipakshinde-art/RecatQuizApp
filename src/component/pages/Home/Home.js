import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Categories from "../../category/Categories";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "./Home.css";
function Home({ name, setName, fetchQuestions }) {


  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  //router histroy hooks
  const history = useHistory();

  const submit = () => {
    //any in these empty then throw error
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty); //for fetting que and diffiuclty from api
      history.push("/quiz"); //push to that page
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="setting_select">

        {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            variant="outlined"
            style={{ marginBottom: 20 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select category"
            variant="outlined"
            style={{ marginBottom: 20 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {
              //map category to ui so we select it
              Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))
            }
          </TextField>

          <TextField
            select
            label="select deficulty"
            variant="outlined"
            style={{ marginBottom: 20 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="Primary"
            size="large"
            onClick={submit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  );
}

export default Home;
