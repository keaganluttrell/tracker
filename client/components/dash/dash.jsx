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

      <div className="aux-list">
        <div className="aux-title">TITLE 1</div>
        <div className="aux-item">ITEM</div>
        <div className="aux-item">ITEM</div>
        <div className="aux-item">ITEM</div>
      </div>

      <div id="dash-todos">
        {sampleData.map(data => {

        })}
      </div>

    </div>
  );
};