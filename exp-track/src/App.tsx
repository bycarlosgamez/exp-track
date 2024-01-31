import './App.css';
import ExpenseList from './expense-tracker/components/ExpenseList';

function App() {
  const expenses = [
    { id: 1, description: 'aaaaa', amount: 10, category: 'test' },
    { id: 2, description: 'bbbbb', amount: 10, category: 'test' },
    { id: 3, description: 'ccccc', amount: 10, category: 'test' },
    { id: 4, description: 'ddddd', amount: 10, category: 'test' },
    { id: 5, description: 'eeeee', amount: 10, category: 'test' },
  ];
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log('Deleted', id)}
      />
    </>
  );
}

export default App;
