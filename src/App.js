import React from 'react';
import './style.css';
import { SampleComponent } from './SampleComponent';
export default function App() {
  return (
    <>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <SampleComponent bgcolor="red" a={10} b={20} />
      <SampleComponent bgcolor="blue" a={10} b={20} />
    </>
  );
}
