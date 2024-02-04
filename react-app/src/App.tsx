import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup/ListGroup';
// import ExpandableText from './components/ListGroup/ExpandableText';
import Form from './components/Form';
import FormHook from './components/FormHook';

function App() {
  const [visibility, setVisibility] = useState(false);
  const items = [
    'YOB',
    'Elder',
    'Sleep',
    'Pigs Pigs Pigs Pigs Pigs Pigs Pigs',
    'SLIFT',
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {visibility && <Alert onClick={() => setVisibility(false)} />}
      <Button
        children='My Button'
        onClick={() => setVisibility(true)}
        // color='secondary'
      />
      <ListGroup
        items={items}
        heading='Bands'
        onSelectItem={handleSelectItem}
      />
      {/* <ExpandableText char={} buttonText={} /> */}
      <Form />
      <FormHook />
    </>
  );
}

export default App;
