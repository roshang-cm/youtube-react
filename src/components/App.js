import React from 'react';
import LoginPage from "./Login";
import { getUser } from '../methods';
function App() {
  if(getUser()) {
    window.location.replace('/home');
  } else {
    window.location.replace('/login');
  }
  return (
    <div className="App">
      <LoginPage/>
      </div>
  );
}

export default App;
