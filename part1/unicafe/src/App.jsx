import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <div>{props.text + ' ' + props.value}</div>
    </>
  )
}

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
        <StatisticLine text={'good'} value={props.good}/>
        <StatisticLine text={'neutral'} value={props.neutral}/>
        <StatisticLine text={'bad'} value={props.bad}/>
        <StatisticLine text={'all'} value={getTotalVotes()}/>
        <StatisticLine text={'average'} value={getAverageScore()}/>
        <StatisticLine text={'positive'} value={getPositivePercentage() + '%'}/>
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

  const handleClick = (feedbackType, stateSetter) => {
    return () => stateSetter(feedbackType + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleClick(good, setGood)} text={'good'} />
      <Button onClick={handleClick(neutral, setNeutral)} text={'neutral'}/>
      <Button onClick={handleClick(bad, setBad)} text={'bad'}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App