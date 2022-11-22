import { useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Result from './components/Result';

function App() {
    const [personal, setPersonal] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    const [education, setEducation] = useState({
      school: '',
      field: '',
      startDate: '',
      endDate: '',
    })
    const [experience, setExperience] = useState({
      company: '',
      title: '',
      startDate: '',
      endDate: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    setIsEditing(false);
  }

  function handleEditing(e) {
    e.preventDefault();
    setIsEditing(true);
    setIsSubmitted(false);
  }

  if (isSubmitted === true) {
    return <div className='results-container'>
    <Result 
    personal={personal} 
    experience={experience} 
    education={education}
  />
  <button className='edit-button' onClick={handleEditing}>Edit</button>
  </div>
  } else {
    if (isEditing === true) {
      return  <div className="App">
         <form onSubmit={handleSubmit}>
           <Personal personal={personal} setPersonal={setPersonal}/>
           <Education education={education} setEducation={setEducation}/>
           <Experience experience={experience} setExperience={setExperience}/>
           <button>Submit</button>
        </form>
    </div>
    }
  }

  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Personal personal={personal} setPersonal={setPersonal}/>
        <Education education={education} setEducation={setEducation}/>
        <Experience experience={experience} setExperience={setExperience}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
