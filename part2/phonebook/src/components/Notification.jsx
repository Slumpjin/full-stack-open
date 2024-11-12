const Notification = ({ successMessage, errorMessage }) => {
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (successMessage === null && errorMessage === null) {
        return null
    }

    if (errorMessage) {
        return (
            <div style={errorStyle}>
                {errorMessage}
            </div>
        )
    }
    else if (successMessage) {
        return (
            <div style={successStyle}>
                {successMessage}
            </div>
        )
    }
}

export default Notification