import React from 'react';
import { useAuth } from '../../utils/auth-hook';
import '../../styles/dash';
import sampleData from '../../../database/todo-sample';
import List from './list';

export default function Dash() {
  const { user } = useAuth();
  return (

    <div id="dash">
      <div id="welcome">
        Welcome {user?.displayName || 'User'}! You have {user?.projects || 0} open projects.
      </div>
      <List data={sampleData} />
    </div>
  );
};