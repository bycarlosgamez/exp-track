import './App.css';
import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';

function App() {
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

  return (
    <>
      <ExpenseFilter onSelectCategory={(category) => console.log(category)} />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses((expenses) => expenses.filter((e) => e.id !== id))
        }
      />
    </>
  );
}

export default App;
