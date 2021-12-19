import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const MostVoted = ({votes}) => {

  const notVoted = (vote) => vote === 0;
  console.log(notVoted)

  if (votes.every(notVoted)) {
    
    return (
      <div>
        <p>No votes</p>
      </div>
    )
  }

  else {
    const maxVotes = Math.max(...votes)
    const indexOfMostVotes = (votes).findIndex((vote) => vote === maxVotes);
    const mostVotedAnecdote = anecdotes[indexOfMostVotes];
    
    return (
      <div>
        <p>{mostVotedAnecdote}</p>
        <b><p>has {maxVotes} votes</p></b>
      </div> 
    )
  }
}

const App = () => {
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdote)
  }

  const addVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVote(votesCopy)
  }

  return (
    <div>
      <h1>Anecdote</h1>
      <p>{anecdotes[selected]}</p>

      <Button handleClick = {addVote} text="Vote" />
      <Button handleClick = {nextAnecdote} text="Next anecdote" />

      <h1>Anecdote with the most votes</h1>
      <MostVoted votes={votes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

export default App
