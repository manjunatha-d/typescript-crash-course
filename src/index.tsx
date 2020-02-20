import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>TypeScript Crash Course</h1>
      <p>See the directories types and features on the left panel.</p>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
