import { categories } from '../../App';

const ExpenseForm = () => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input id='description' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input id='amount' type='number' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='categopry' className='form-label'>
          Category
        </label>
        <select id='categopry' className='form-select'>
          <option value=''></option>
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ExpenseForm;
