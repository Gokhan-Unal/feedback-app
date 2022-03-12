import React from 'react';

export default function RatingSelect({ selected, onSelect }) {
  const handleChange = (e) => {
    onSelect(+e.target.value);
    console.log(e.target.value);
  };
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => {
        return (
          <li key={`rating-${i + 1}`}>
            <input
              type='radio'
              id={`num${i + 1}`}
              name='rating'
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        );
      })}
    </ul>
  );
}
