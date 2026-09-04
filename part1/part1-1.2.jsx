const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part  part={props.part[0]} exercises={props.exercises[0]}/>
      <Part  part={props.part[1]} exercises={props.exercises[1]}/>
      <Part  part={props.part[2]} exercises={props.exercises[2]}/>
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
      <Content part={part} exercises={exercises} />
      <Total total={exercises[0]+exercises[1]+exercises[2]} />
    </div>
  )
}

export default App