import { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

const StatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return (
      <p> {text} {value} % </p>
    )
  }
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  );
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive} />
      </table>

    </div>
  );
}

const App = () => {

  const goodText = 'good';
  const neutralText = 'neutral';
  const badText = 'bad';

  const [good, addGood] = useState(0);
  const [neutral, addNeutral] = useState(0);
  const [bad, addBad] = useState(0);
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  const handleGoodClick = () => addGood(good + 1);
  const handleNeutralClick = () => addNeutral(neutral + 1);
  const handleBadClick = () => addBad(bad + 1);


  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text={goodText} />
        <Button handleClick={handleNeutralClick} text={neutralText} />
        <Button handleClick={handleBadClick} text={badText} />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  );
}

export default App;
