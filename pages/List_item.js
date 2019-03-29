import React from 'react';

const List = ({ items }) => (
  <ul>
    <h1>List your ToDo </h1>
    {
      items && items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
  );

export default List;
