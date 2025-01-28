export default function General({ generalInfo, setGeneralInfo }) {
  
  const handleInputChange = (field, value) => {
    setGeneralInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDelete = (fname, lname, email, phone) => {
    setGeneralInfo(prev => ({
      ...prev,
      [fname]: "",
      [lname]: "",
      [email]: "",
      [phone]: "",
    }));
  };

  return (
    <div className="general">
      <h2>General Information</h2>

      <label htmlFor="fname">First name:</label>
      <input
        type="text"
        value={generalInfo.fname}
        placeholder="Joe"
        onChange={(event) => handleInputChange('fname', event.target.value)}
      />

      <label htmlFor="lname">Last name:</label>
      <input
        type="text"
        value={generalInfo.lname}
        placeholder="Bloggs"
        onChange={(event) => handleInputChange('lname', event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={generalInfo.email}
        placeholder="joe@bloggs.com"
        onChange={(event) => handleInputChange('email', event.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"  
        value={generalInfo.phone}
        placeholder="07123 546 789"
        onChange={(event) => handleInputChange('phone', event.target.value)}
      />

      <button className="delete-general" onClick={() => handleDelete('fname', 'lname', 'email', 'phone')}>Reset</button>

    </div>
  );
}