import { useRef } from 'react';

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: '',
    age: 0,
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input ref={nameRef} type='text' className='form-control' id='name' />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input ref={ageRef} type='number' className='form-control' id='age' />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default Form;
