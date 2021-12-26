import React from 'react';
import './App.css';
import Form from './Form';
import FormList from './FormList';

function App() {
 
  return (
    <div >
      <Form onInputData={inputData}/>
      <br/>
      <br/>
      <FormList inputData={inputData}/>
  
    </div>
  );
}

export default App;
