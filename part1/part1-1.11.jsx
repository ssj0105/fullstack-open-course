import { useState } from 'react'

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const StatisticLine = ({ text, value}) => {
  return (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({ data }) => {
  
  if (data[3] === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (

    <table>
      <tbody>
        <StatisticLine text="good" value={data[0]} />
        <StatisticLine text="neutral" value={data[1]} />
        <StatisticLine text="bad" value={data[2]} />
        <StatisticLine text="all" value={data[3]} />
        <StatisticLine text="average" value={(data[0]*1 + data[1]*0 + data[2]*(-1))/(data[3])} />
        <StatisticLine text="positive" value={`${data[0]/data[3]*100} %`} />
      </tbody>
    </table>
      
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const section1 = "give feedback"
  const section2 = "statistics"
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allVotes = good + neutral + bad

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title={section1} />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Header title={section2} />
      <Statistics data={[good, neutral, bad, allVotes]} />
    </div>
  )
}

export default App