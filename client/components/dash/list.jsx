import React from 'react';
import Item from './item';

export default function List({ data }) {
  return (
    <div id="dash-todos">
      {data.map(item => {
        //create an item component
        return <Item item={item} />
      })}
    </div>
  );
};