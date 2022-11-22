
function Personal({personal, setPersonal}) {

  function handleFirstName(e) {
    setPersonal({
      ...personal, 
      firstName: e.target.value
    })
  }

  function handleLastName(e) {
    setPersonal({
      ...personal,
      lastName: e.target.value
    })
  }

  function handleEmail(e) {
    setPersonal({
      ...personal,
      email: e.target.value
    })
  }

  function handlePhone(e) {
    setPersonal({
      ...personal,
      phone: e.target.value
    })
  }


    return (
        <div className='personal-container'>
          <h1 className='heading'>Personal Info</h1>
          <label htmlFor='fName'>First Name</label>
          <input value={personal.firstName} onChange={handleFirstName} type='text' id='fName' autoComplete='off' required></input>
          <label htmlFor='lName'>Last Name</label>
          <input value={personal.lastName} onChange={handleLastName} type='text' id='lName' autoComplete='off' required></input>
          <label htmlFor='email'>Email Address</label>
          <input value={personal.email} onChange={handleEmail} type='email' id='email' autoComplete='off' required></input>
          <label htmlFor='phone'>Phone Number</label>
          <input value={personal.phone} onChange={handlePhone} type='text' id='phone' autoComplete='off' required></input>
          {/* <button type='submit'onClick={handleSubmit}>Click</button> */}
        </div>
    )
}

export default Personal;