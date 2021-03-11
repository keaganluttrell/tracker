import React from 'react';


export default function Item({item}) {
  return (
    <div className="dash-list-item">
      {item.text}
    </div>
  );
};