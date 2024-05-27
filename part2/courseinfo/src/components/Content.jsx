const Content = ({parts}) => {
    return (parts.map(part => {
        return <Part key={part.id} name={part.name} exercises={part.exercises} />
    }))
}

export default Content

const Part = (props) => {
    const {id, name, exercises} = props

    return <div key={id}> {name} {exercises}</div>
}