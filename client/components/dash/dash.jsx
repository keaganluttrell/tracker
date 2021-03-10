import React from 'react';
import { useAuth } from '../../utils/auth-hook';
import '../../styles/dash';
import sampleData from '../../../database/todo-sample';


export default function Dash() {
  const { user } = useAuth();
  return (

    <div id="dash">
      <div id="welcome">
        Welcome {user?.displayName || 'User'}! You have {user?.projects || 0} open projects.
      </div>
      <div id="dash-todos">
        {sampleData.map(data => {
          //create a list component
          //create an item component
          return <div>{data.text}</div>
        })}
      </div>

    </div>
  );
};