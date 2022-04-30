import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));

  const handleAnekdoottiClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }
  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }


  const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>
        votes {votes[selected]}
      </p>
      <Button handleClick={handleAnekdoottiClick} text='anekdootti' />
      <Button handleClick={handleVoteClick} text='votes' />
      <div>
        <h1>Anecdote with most votes</h1>
        <p> {anecdotes[votes.indexOf(Math.max(...votes))]} </p>
        <p>has {Math.max(...votes)}</p>
      </div>
    </div>
  )
}

export default App;
