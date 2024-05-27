const Course = (props) => {
    const { course } = props

    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course

const Header = ({name}) => {
    return (
      <h1>{name}</h1>
    )
}
  
const Content = ({parts}) => {
    return (parts.map(part => {
        return <Part key={part.id} name={part.name} exercises={part.exercises} />
    }))
}

const Part = (props) => {
    const {id, name, exercises} = props

    return <div key={id}> {name} {exercises}</div>
}
  
//   const Total = (props) => {
//     return (
//       <p>Number of exercises {props.parts.reduce((acc, cur) => acc + cur.exercises, 0)}</p>
//     )
//   }