import './App.css';

import { useMemo, useState, useCallback } from "react";

const App = (): JSX.Element => {
  const items = ['первый', 'второй', 'третий', 'четвертый', 'пятый'];
  const [list, setList] = useState([...items]);

  const handleRemoveItem = useCallback(
    (index: number) => {
      const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    },
    [list]
  );

  const renderedList = useMemo(() => list.map((item, index) => (
    <li key={index}>
      {item} <button onClick={() => handleRemoveItem(index)}>x</button>
    </li>
  )), [list, handleRemoveItem]);

  return (
    <ul>
      {renderedList}
    </ul>
  );
};

export default App;
