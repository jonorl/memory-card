import { useState } from 'react'

import General from './General'
import Education from './Education'
import Experience from './Experience'
import Preview from './Preview'

function App() {

  // Default states for General

  const [generalInfo, setGeneralInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  // Education Related functions, states, props and templates.

  // Education state changes

  const [eduMoreThanOne, setEduMoreThanOne] = useState(false)   // To make the additional buttons appear

  const [educationInfo, setEducationInfo] = useState({  // To render input on Preview
    school: "",
    title: "",
    date: "",
  });

  const [educationEntries, setEducationEntries] = useState([]); // To store all education entries
  const [currentEducationIndex, setCurrentEducationIndex] = useState(0); // To navigate through education entries

  const handleInputChangeEducation = (field, value) => { // To handle input changes
    setEducationInfo({ ...educationInfo, [field]: value });
  };

  // Education button functions

  const submitEducationEntry = () => {
    // Create a new array by mapping through existing entries
    const updatedEntries = educationEntries.map((entry, index) => {
      // If this is the current index, update with current educationInfo
      if (index === currentEducationIndex) {
        return { ...educationInfo };
      }
      // Otherwise, return the original entry
      return entry;
    });

    // If no entries exist at the current index, append the new entry
    if (currentEducationIndex >= updatedEntries.length) {
      updatedEntries.push({ ...educationInfo });
    }

    // Make the prev/next buttons appear
    setEduMoreThanOne(true)

    // Update the entries array
    setEducationEntries(updatedEntries);
  };

  const addEducationEntry = () => {
    // Create a new array with the existing entries
    const updatedEntries = [...educationEntries];

    // Add a new blank entry to the array
    updatedEntries.push({ school: "", title: "", date: "" });

    // Update the entries array
    setEducationEntries(updatedEntries);

    // Move the current index to the newly created entry
    setCurrentEducationIndex(updatedEntries.length - 1);

    // Reset the educationInfo to blank
    setEducationInfo({ school: "", title: "", date: "" });
  };

  const nextEducation = () => {
    if (currentEducationIndex < educationEntries.length - 1) {
      // When moving to next entry, update the educationInfo state 
      // with the details of the next entry
      setCurrentEducationIndex(currentEducationIndex + 1);
      setEducationInfo({
        school: educationEntries[currentEducationIndex + 1].school,
        title: educationEntries[currentEducationIndex + 1].title,
        date: educationEntries[currentEducationIndex + 1].date
      });
      return currentEducationIndex
    }
  };

  const prevEducation = () => {
    if (currentEducationIndex > 0) {
      // When moving to previous entry, update the educationInfo state 
      // with the details of the previous entry
      setCurrentEducationIndex(currentEducationIndex - 1);


      setEducationInfo({
        school: educationEntries[currentEducationIndex - 1].school,
        title: educationEntries[currentEducationIndex - 1].title,
        date: educationEntries[currentEducationIndex - 1].date
      });
      return currentEducationIndex
    }
  };

  // Education input fields template

  const educationFields = (
    <>
      <h2>Education</h2>

      <label htmlFor="schoolName">School Name:</label>
      <input
        type="text"
        value={educationInfo.school}
        placeholder="Hollywood Upstairs Medical College"
        onChange={(event) => handleInputChangeEducation("school", event.target.value)}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={educationInfo.title}
        placeholder="Nuclear Safety Engineer"
        onChange={(event) => handleInputChangeEducation("title", event.target.value)}
      />

      <label htmlFor="date">Graduation Date:</label>
      <input
        type="date"
        value={educationInfo.date}
        onChange={(event) => handleInputChangeEducation("date", event.target.value)}
      />
    </>
  )

  // Experience Related functions, states, props and templates.

  // Experience state changes

  const [expMoreThanOne, setExpMoreThanOne] = useState(false)   // To make the additional buttons appear

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  const [experienceEntries, setExperienceEntries] = useState([]); // To store all experience entries
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0); // To navigate through experience entries

  const handleInputChangeExperience = (field, value) => { // To handle input changes
    setExperienceInfo({ ...experienceInfo, [field]: value });
  };

  // Education button functions

  const submitExperienceEntry = () => {
    // Create a new array by mapping through existing entries
    const updatedEntries = experienceEntries.map((entry, index) => {
      // If this is the current index, update with current educationInfo
      if (index === currentExperienceIndex) {
        return { ...experienceInfo };
      }
      // Otherwise, return the original entry
      return entry;
    });

    // If no entries exist at the current index, append the new entry
    if (currentExperienceIndex >= updatedEntries.length) {
      updatedEntries.push({ ...experienceInfo });
    }

    // Make the prev/next buttons appear
    setExpMoreThanOne(true)

    // Update the entries array
    setExperienceEntries(updatedEntries);
  };

  const addExperienceEntry = () => {
    // Create a new array with the existing entries
    const updatedEntries = [...experienceEntries];

    // Add a new blank entry to the array
    updatedEntries.push({ company: "", position: "", responsibilities: "", dateFrom: "", dateTo: "",});

    // Update the entries array
    setExperienceEntries(updatedEntries);

    // Move the current index to the newly created entry
    setCurrentExperienceIndex(updatedEntries.length - 1);

    // Reset the educationInfo to blank
    setExperienceInfo({ company: "", position: "", responsibilities: "", dateFrom: "", dateTo: "",});
  };

  const nextExperience = () => {
    if (currentExperienceIndex < experienceEntries.length - 1) {
      // When moving to next entry, update the experience state 
      // with the details of the next entry
      setCurrentExperienceIndex(currentExperienceIndex + 1);
      setExperienceInfo({
        company: experienceEntries[currentExperienceIndex + 1].company,
        position: experienceEntries[currentExperienceIndex + 1].position,
        responsibilities: experienceEntries[currentExperienceIndex + 1].responsibilities,
        dateFrom: experienceEntries[currentExperienceIndex + 1].dateFrom,
        dateTo: experienceEntries[currentExperienceIndex + 1].dateTo,
      });
      return currentExperienceIndex
    }
  };

  const prevExperience = () => {
    if (currentExperienceIndex > 0) {
      // When moving to previous entry, update the experienceInfo state 
      // with the details of the previous entry
      setCurrentExperienceIndex(currentExperienceIndex - 1);


      setExperienceInfo({
        company: experienceEntries[currentExperienceIndex - 1].company,
        position: experienceEntries[currentExperienceIndex - 1].position,
        responsibilities: experienceEntries[currentExperienceIndex - 1].responsibilities,
        dateFrom: experienceEntries[currentExperienceIndex - 1].dateFrom,
        dateTo: experienceEntries[currentExperienceIndex - 1].dateTo,
      });
      return currentExperienceIndex
    }
  };

  // Experience input fields template

  const experienceFields = (
    <>
      <h2>Experience</h2>

      <label htmlFor="schoolName">Company:</label>
      <input
        type="text"
        value={experienceInfo.company}
        placeholder="Springfield Nuclear Plant"
        onChange={(event) => handleInputChangeExperience("company", event.target.value)}
      />

      <label htmlFor="title">Position:</label>
      <input
        type="text"
        value={experienceInfo.position}
        placeholder="Head Bee guy"
        onChange={(event) => handleInputChangeExperience("position", event.target.value)}
      />

      <label htmlFor="responsibilities">Responsibilities:</label>
      <textarea
        rows="4" 
        cols="50"
        value={experienceInfo.responsibilities}
        onChange={(event) => handleInputChangeExperience("responsibilities", event.target.value)}
      />

      <label htmlFor="responsibilities">Date From:</label>
      <input
        type="date"
        value={experienceInfo.dateFrom}
        onChange={(event) => handleInputChangeExperience("dateFrom", event.target.value)}
      />

      <label htmlFor="date-to">Date To:</label>
      <input
        type="date"
        value={experienceInfo.dateTo}
        onChange={(event) => handleInputChangeExperience("dateTo", event.target.value)}
      />

    </>
  )

  // Render and passing props to components

  return (
    <>
      <h1>CV Builder</h1>
      <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education setEducationInfo={setEducationInfo} educationFields={educationFields} nextEducation={nextEducation} prevEducation={prevEducation} addEducationEntry={addEducationEntry} submitEducationEntry={submitEducationEntry} eduMoreThanOne={eduMoreThanOne}/>
      <Experience setExperienceInfo={setExperienceInfo} experienceFields={experienceFields} nextExperience={nextExperience} prevExperience={prevExperience} addExperienceEntry={addExperienceEntry} submitExperienceEntry={submitExperienceEntry} expMoreThanOne={expMoreThanOne}/>
      <Preview generalInfo={generalInfo}
        setEducationInfo={setEducationInfo}
        educationEntries={educationEntries}
        setExperienceInfo={setExperienceInfo}
        experienceEntries={experienceEntries} />
    </>
  )
}

export default App
