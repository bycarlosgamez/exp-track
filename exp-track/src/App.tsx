import './App.css';
import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // const handleDelete = (e) => {
  //   const { target } = e
  //   setExpenses( prevExpenses => prevExpenses.filter(e => e.id !== id) )
  // }

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaaaa', amount: 10, category: 'test' },
    { id: 2, description: 'bbbbb', amount: 10, category: 'test' },
    { id: 3, description: 'ccccc', amount: 10, category: 'test' },
    { id: 4, description: 'ddddd', amount: 10, category: 'test' },
    { id: 5, description: 'eeeee', amount: 10, category: 'test' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className='mb-5'>
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses((expenses) => expenses.filter((e) => e.id !== id))
        }
      />
    </>
  );
}

export default App;
