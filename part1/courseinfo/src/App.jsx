const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ],
  }

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  let paragraphs = [];
  for (const part of props.parts) {
    paragraphs = paragraphs.concat(
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  return (
    <div> {paragraphs} </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((acc, cur) => acc + cur.exercises, 0)}</p>
  )
}

export default App