import { useState } from 'react'

export default function Preview({ generalInfo, educationEntries, experienceEntries, }) {

    const [isSubmitted, setSubmitted] = useState(false);

    if (isSubmitted) {
        return <h2 className='submitted'>Your Application has been submitted!</h2>
    }

    function handleSubmit() {
        setSubmitted(true)
    }

    function renderOtherEducation() {
        return educationEntries.map((entry, index) => (
            <div key={index}>
                <h1>Education {index + 1}</h1>
                <h2 className="candidate-school">{entry.school}</h2>
                <h2 className="candidate-title">{entry.title}</h2>
                <h2 className="candidate-grad-date">{entry.date}</h2>
                <br />
            </div>
        ));
    }

    const previewDivEducation = (
        <>
            {renderOtherEducation()}
        </>
    )

    function renderOtherExperience() {
        return experienceEntries.map((entry, index) => (
            <div key={index}>
                <h1>Experience {index + 1}</h1>
                <h2 className="candidate-company">{entry.company}</h2>
                <h2 className="candidate-position">{entry.position}</h2>
                <h2 className="candidate-responsibilities">{entry.responsibilities}</h2>
                <h2 className="candidate-work-from">{entry.dateFrom}</h2>
                <h2 className="candidate-work-to">{entry.dateTo}</h2>
                <br />
            </div>
        ));
    }

    const previewDivExperience = (
        <>
            {renderOtherExperience()}
        </>
    )


    return <div className="preview-container">

        <div className="preview">
            <div className="preview-general">
            <h1 className="candidate-name">{generalInfo.fname} {generalInfo.lname}</h1>
            <h2 className="candidate-email">{generalInfo.email}</h2>
            <h2 className="candidate-phone">{generalInfo.phone}</h2>
            <br />
            </div>
            <div className="preview-education">
            {previewDivEducation}
            </div>
            <div className="preview-experience">
            {previewDivExperience}
            </div>
        </div>

        <button className="submit" onClick={() => handleSubmit()}>Submit</button>
    </div>
}