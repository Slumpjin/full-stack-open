import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>{'positive ' + props.getPercentage() + '%'}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getTotalVotes = () => good + neutral + bad

  const getAverageScore = () => {
    const totalVotes = getTotalVotes()
    return totalVotes ? (good + -1 * bad) / totalVotes : 0
  }

  const getPositivePercentage = () => {
    const totalVotes = getTotalVotes()
    return totalVotes ? (good / totalVotes) * 100 : 0
  }

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      
      <h1>statistics</h1>
      <div>{'good ' + good}</div>
      <div>{'neutral ' + neutral}</div>
      <div>{'bad ' + bad}</div>
      <div>{'all ' + getTotalVotes()}</div>
      <div>{'average ' + getAverageScore()}</div>
      <Statistics getPercentage={getPositivePercentage}/>
    </div>
  )
}

export default App