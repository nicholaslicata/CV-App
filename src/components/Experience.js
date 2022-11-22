
function Experience({experience, setExperience}) {

    function handleCompany(e) {
        setExperience({
            ...experience,
            company: e.target.value
        })
    }

    function handleTitle(e) {
        setExperience({
        ...experience,
        title: e.target.value
        })
    }

    function handleStartDate(e) {
        setExperience({
            ...experience,
            startDate: e.target.value
        })
    }

    function handleEndDate(e) {
        setExperience({
            ...experience,
            endDate: e.target.value
        })
    }

    return (
        <div className='experience-container'>
            <h1 className='heading'>Work Experience</h1>
            <label htmlFor='company'>Company Name</label>
            <input value={experience.company} onChange={handleCompany} type='text' id='company' autoComplete='off' required></input>
            <label htmlFor='title'>Job Title</label>
            <input value={experience.title} onChange={handleTitle} type='text' id='title' autoComplete='off' required></input>
            <label htmlFor='start2'>Start Date</label>
            <input value={experience.startDate} onChange={handleStartDate} type='date' id='start2' autoComplete='off' required></input>
            <label htmlFor='end2'>End Date</label>
            <input value={experience.endDate} onChange={handleEndDate} type='date' id='end2' autoComplete='off' required></input>
        </div>
    )
}

export default Experience;