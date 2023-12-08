// Foreground.jsx
import React, { useRef, useState } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);
  const [cards, setCards] = useState([
    { desc: '', filesize: '.9mb', close: true, tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' } },
    { desc: '', filesize: '.9mb', close: true, tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' } },
    { desc: '', filesize: '.9mb', close: true, tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' } },
  ]);

  const addCard = () => {
    const newCard = {
      desc: '', // Set the default description to an empty string
      filesize: '1mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'New Tag', tagColor: 'blue' },
    };

    setCards((prevCards) => [...prevCards, newCard]);
  };

  const handleDescChange = (index, value) => {
    const newCards = [...cards];
    newCards[index].desc = value;
    setCards(newCards);
  };

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] h-full w-full flex flex-col p-5'>
      <div className='flex-grow flex gap-5 flexwrap-wrap'>
        {cards.map((item, index) => (
          <Card key={index} data={item} reference={ref} onDescChange={(value) => handleDescChange(index, value)}></Card>
        ))}
      </div>
      <button onClick={addCard} className='bg-blue-500 text-white px-4 py-2 mt-4 rounded-md self-end'>
        Add Card
      </button>
    </div>
  );
}

export default Foreground;
