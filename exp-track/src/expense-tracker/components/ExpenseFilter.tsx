const ExpenseFilter = () => {
  return (
    <select className='fprm-select'>
      <option value=''>All categories</option>
      <option value='groceries'>Groceries</option>
      <option value='utilities'>Utilities</option>
      <option value='entertainment'>Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
