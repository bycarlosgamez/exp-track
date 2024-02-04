import { useState } from 'react';
import './ListGroup.css';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No bands found</p>}
      <ul className='list-group'>
        {items.map((band, i) => (
          <li
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              onSelectItem(band);
            }}
            className={
              selectedIndex === i ? 'list-group-item active' : 'list-group-item'
            }
          >
            {band}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
