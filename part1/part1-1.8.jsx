import { useState } from 'react'

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Statistics = ({ data }) => {
  return (
    <div>
      <div>good {data[0]}</div>
      <div>neutral {data[1]}</div>
      <div>bad {data[2]}</div>
      <div>all {data[0] + data[1] + data[2]}</div>
      <div>average {(data[0]*1 + data[1]*0 + data[2]*(-1))/(data[0] + data[1] + data[2])}</div>
      <div>positive {data[0]/(data[0] + data[1] + data[2])*100} %</div>
    </div>
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
      <Statistics data={[good, neutral, bad]} />
    </div>
  )
}

export default App