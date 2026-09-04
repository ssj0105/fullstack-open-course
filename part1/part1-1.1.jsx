const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]
  
  return (
    <div>
      <Header course={course} />
      <Content part={part[0]} exercises={exercises[0]} />
      <Content part={part[1]} exercises={exercises[1]} />
      <Content part={part[2]} exercises={exercises[2]} />
      <Total total={exercises[0]+exercises[1]+exercises[2]} />
    </div>
  )
}

export default App