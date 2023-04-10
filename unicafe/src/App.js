import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const goodReview = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average + 1);
  };

  const neutralReview = () => {
    setNeutral(good + 1);
    setAll(all + 1);
  };

  const badReview = () => {
    setBad(good + 1);
    setAll(all + 1);
    setAverage(average - 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodReview} text="good"></Button>
      <Button handleClick={neutralReview} text="neutral"></Button>
      <Button handleClick={badReview} text="bad"></Button>
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
      ></Statistics>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, all, average }) => {
  const calculateAverage = () => {
    if (all === 0) {
      return 0;
    } else {
      return average / all;
    }
  };

  const calculatePositive = () => {
    if (all === 0) {
      return 0 + " %";
    } else {
      let posPercent = (good / all) * 100;
      return posPercent + " %";
    }
  };

  if (all === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good}></StatisticLine>
          <StatisticLine text="neutral" value={neutral}></StatisticLine>
          <StatisticLine text="bad" value={bad}></StatisticLine>
          <StatisticLine text="all" value={all}></StatisticLine>
          <StatisticLine
            text="average"
            value={calculateAverage()}
          ></StatisticLine>
          <StatisticLine
            text="positive"
            value={calculatePositive()}
          ></StatisticLine>
        </tbody>
      </table>
    );
  }
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}
        {value}
      </td>
    </tr>
  );
};

export default App;
