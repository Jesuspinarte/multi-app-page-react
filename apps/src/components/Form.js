import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function TestForm(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isAlive, setIsAlive] = useState(false);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male');
  const [comments, setComments] = useState('');
  const [message, setMessage] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage([
      `Name: ${fullName}`,
      <br key='newLine1' />,
      `Email: ${email}`,
      <br key='newLine2' />,
      `isAlive: ${isAlive}`,
      <br key='newLine3' />,
      `Age: ${age}`,
      <br key='newLine4' />,
      `Gender: ${gender}`,
      <br key='newLine5' />,
      `Comments: ${comments}`
    ]);
  };

  return (
    <React.Fragment>
      <h1 className="title">{props.formHeader}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Full Name(type-text):
          <input
            required='required'
            type='text'
            name='fullName'
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </label>
        <label>
          Email(type-email):
          <input
            type='email'
            name='email'
            value={email}
            onChange={(event) => setEmail(event.target.email)}
          />
        </label>

        <label>
          Alive(type-checkbox):
          <input
            name='isAlive'
            type='checkbox'
            checked={isAlive}
            onChange={(event) => setIsAlive(event.target.checked)}
          />
        </label>
        <label>
          Age(type-number):
          <input
            name='age'
            type='number'
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <label>
          M/F(select):
          <select
            name='selectGenderValue'
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </label>
        <label>
          Comments:
          <textarea
            name='comments'
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
    </React.Fragment>
  );
}


const wrapper = document.getElementById('form');
wrapper ? ReactDOM.render(<TestForm formHeader='Test Form Title' />, wrapper) : false;
