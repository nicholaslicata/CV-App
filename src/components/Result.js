
function Result({personal, education, experience, handleEditing}) {

    return(
        <div className='results-text-container'>
            <h2>{personal.firstName} {personal.lastName}</h2>
            <p>{personal.email}</p>
            <p>{personal.phone}</p>
            <h2>Education</h2>
            <p>{education.school}</p>
            <p>{education.field}</p>
            <p>{education.startDate} - {education.endDate}</p>
            <h2>Experience</h2>
            <p>{experience.company}</p>
            <p>{experience.title}</p>
            <p>{experience.startDate} - {experience.endDate}</p>
        </div>
    )
}

export default Result;