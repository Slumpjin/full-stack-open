import { useState } from 'react'

const Statistics = (props) => {
  const getTotalVotes = () => props.good + props.neutral + props.bad

  const getAverageScore = () => {
    const totalVotes = getTotalVotes()
    return totalVotes ? (props.good + -1 * props.bad) / totalVotes : 0
  }

  const getPositivePercentage = () => {
    const totalVotes = getTotalVotes()
    return totalVotes ? (props.good / totalVotes) * 100 : 0
  }

  const hasFeedback = () => props.good || props.neutral || props.bad

  const renderFeedback = () => {
    return hasFeedback() ? (
      <>
        <div>{'good ' + props.good}</div>
        <div>{'neutral ' + props.neutral}</div>
        <div>{'bad ' + props.bad}</div>
        <div>{'all ' + getTotalVotes()}</div>
        <div>{'average ' + getAverageScore()}</div>
        <div>{'positive ' + getPositivePercentage() + '%'}</div>
      </>
    ) : (
      <>
        <h2>No feedback given</h2>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      {renderFeedback()}
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App