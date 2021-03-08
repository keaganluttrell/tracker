import React from 'react';
import { useAuth } from '../utils/auth-hook';
import '../styles/dash'


export default function Dash() {
  const { user } = useAuth();
  return (

    <div id="dash">
      <div id="welcome">
        Welcome {user?.displayName || 'User'}! You have {user?.projects || 0} open projects.
      </div>
      <div className="card-list">
        <div className="card">
          <div className="card-title">STAT</div>
          <div className="card-info">INFO</div>
        </div>
        <div className="card">
          <div className="card-title">STAT</div>
          <div className="card-info">INFO</div>
        </div>
        <div className="card">
          <div className="card-title">STAT</div>
          <div className="card-info">INFO</div>
        </div>

        <div className="card-sp">
          <div className="card-title">STAT</div>
          <div className="card-info">INFO</div>
        </div>

      </div>

      <div className="aux-lists">
        <div className="aux-list">
          <div className="aux-title">TITLE 1</div>
          <div className="aux-item">ITEM</div>
          <div className="aux-item">ITEM</div>
          <div className="aux-item">ITEM</div>
        </div>

        <div className="aux-list">
        <div className="aux-title">TITLE 2</div>
          <div className="aux-item">ITEM</div>
          <div className="aux-item">ITEM</div>
          <div className="aux-item">ITEM</div>
          <div className="aux-item">ITEM</div>
          <div className="aux-item">ITEM</div>
          <div className="aux-item">ITEM</div>
        </div>

      </div>

    </div>
  );
};