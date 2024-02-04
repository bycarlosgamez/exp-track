import { useState } from 'react';

const FormState = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPerson({
      ...person,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault;
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          onChange={handleChange}
          value={person.name}
          type='text'
          className='form-control'
          id='name'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          onChange={handleChange}
          value={person.age}
          type='number'
          className='form-control'
          id='age'
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default FormState;
