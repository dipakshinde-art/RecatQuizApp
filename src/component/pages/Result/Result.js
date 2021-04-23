import { Button } from "@material-ui/core";
import "./Result.css";
function Result({ name, score }) {
  return (
    <div className="result">
      <span className="title">
        Hii {name} Your Final Score : {score}
      </span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
}

export default Result;
