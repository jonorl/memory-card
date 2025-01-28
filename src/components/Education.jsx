export default function Education({ submitEducationEntry, setEducationInfo, educationFields, prevEducation, nextEducation, addEducationEntry, eduMoreThanOne }) {

  const handleDelete = (school, title, date) => {
    setEducationInfo(prev => ({
      ...prev,
      [school]: "",
      [title]: "",
      [date]: "",
    }));
  };

  return (
    <div className="education">

      {educationFields}

      <div className="button-container">
        <button className="submit" onClick={submitEducationEntry}>Submit</button>
        {eduMoreThanOne ? <button className="add-education"onClick={addEducationEntry}>Add</button> : false}
        {eduMoreThanOne ? <button className="prev-education"onClick={prevEducation}>Prev</button> : false}
        {eduMoreThanOne ? <button className="next-education"onClick={nextEducation}>Next</button> : false}
        <button className="delete-education" onClick={() => handleDelete('school', 'title', 'date')}>Reset</button>
      </div>

    </div>
  );
}