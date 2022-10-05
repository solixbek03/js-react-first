import './App.css';
import { useState, useRef } from 'react';

function App() {
  return (
    <div>
      <form>
        <input
        // ref={todoInput}
        className='form-control'
        placeholder='Add todo...'
        type='text'
        name=''
        id='todo-input'
      />
      </form>

      <ul className=''>

      </ul>
    </div>
  );
}

export default App;
