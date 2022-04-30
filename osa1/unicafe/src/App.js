import { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

const Stats = ({ text, value }) => {
  return (
    <p> {text} {value} </p>
  );
}

const App = () => {

  const goodText = 'good';
  const neutralText = 'neutral';
  const badText = 'bad';

  const [good, addGood] = useState(0);
  const [neutral, addNeutral] = useState(0);
  const [bad, addBad] = useState(0);

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
      <Stats text={goodText} value={good} />
      <Stats text={neutralText} value={neutral} />
      <Stats text={badText} value={bad} />
    </div>
  );
}

export default App;
