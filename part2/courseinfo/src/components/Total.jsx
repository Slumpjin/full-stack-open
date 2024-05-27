const Total = ({parts}) => {
    return (
        <p style={{fontWeight: 'bold'}}>Number of exercises {parts.reduce((acc, cur) => acc + cur.exercises, 0)}</p>
    )
}

export default Total