export default function Experience({ submitExperienceEntry, setExperienceInfo, experienceFields, prevExperience, nextExperience, addExperienceEntry, expMoreThanOne}) {

  const handleDelete = (company, position, responsibilities, dateFrom, dateTo) => {
    setExperienceInfo(prev => ({
      ...prev,
      [company]: "",
      [position]: "",
      [responsibilities]: "",
      [dateFrom]: "",
      [dateTo]: "",
    }));
  };


  return (
    <div className="experience">

    {experienceFields}

      <div className="button-container">
      <button className="submit" onClick={submitExperienceEntry}>Submit</button>
      {expMoreThanOne ? <button className="add-experience"onClick={addExperienceEntry}>Add</button> : false}
      {expMoreThanOne ? <button className="prev-experience"onClick={prevExperience}>Prev</button> : false}
      {expMoreThanOne ? <button className="next-experience"onClick={nextExperience}>Next</button> : false}
      <button className="delete-experience" onClick={() => handleDelete('company', 'position', 'responsibilities', 'dateFrom', 'dateTo')}>Reset</button>
      </div>
    </div>
  );
}