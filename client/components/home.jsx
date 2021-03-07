import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth-hook';
import '../styles/auth'

export default function Home() {
  const auth = useAuth();
  console.log('HOME', auth);
  return (
    <div id="home">
      HOME
    </div>
  );
}