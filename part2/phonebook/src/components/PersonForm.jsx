const PersonForm = (props) => {
    const { onSubmit, onNameChange, onPhoneNumberChange } = props
    
    return (
        <form onSubmit={onSubmit}>
        <div>
          name: <input required onChange={onNameChange} />
        </div>
        <div>
          number: <input required onChange={onPhoneNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm