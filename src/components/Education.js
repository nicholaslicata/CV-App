
function Education({education, setEducation}) {

  function handleSchool(e) {
    setEducation({
      ...education,
      school: e.target.value
    })
  }

  function handleField(e) {
    setEducation({
      ...education,
      field: e.target.value
    })
  }

  function handleStartDate(e) {
    setEducation({
      ...education,
      startDate: e.target.value
    })
  }

  function handleEndDate(e) {
    setEducation({
      ...education,
      endDate: e.target.value
    })
  }

    return(
        <div className='education-container'>
          <h1 className='heading'>Education History</h1>
          <label htmlFor='school'>School Name</label>
          <input value={education.school} onChange={handleSchool}type='text' id='school' autoComplete='off' required></input>
          <label htmlFor='field'>Field Of Study</label>
          <input value={education.field} onChange={handleField} type='text' id='field' autoComplete='off' required></input>
          <label htmlFor='start1'>Start Date</label>
          <input value={education.startDate} onChange={handleStartDate} type='date' id='start1' autoComplete='off' required></input>
          <label htmlFor='end1'>End Date</label>
          <input value={education.endDate} onChange={handleEndDate} type='date' id='end1' autoComplete='off' required></input>
        </div>
    )
}

export default Education;