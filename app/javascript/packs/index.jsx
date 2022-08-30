import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  // ReactDOM.render(
  //   <BrowserRouter>
  //     <App/>
  //   </BrowserRouter>,
  //   document.querySelector('#root'),
  // );
  const container = document.getElementById('root');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(

      <App/>

  );
});