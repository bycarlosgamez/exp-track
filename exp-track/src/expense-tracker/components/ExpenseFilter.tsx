import categories from '../categories';

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className='form-select form-select-lg'
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value=''>Select Category</option>
      {categories.map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
