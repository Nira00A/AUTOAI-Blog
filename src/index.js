import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import HomePage from './Home/home';
import HomepageLayout from './Layouts&components/homeLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Approutes = () =>{
  const router = useMemo(()=>{
    return createBrowserRouter([
      {
        path: '/',
        element: <HomepageLayout />,
        children:[
          {
            path: '',
            element: <HomePage />
          }
        ]
      }
    ])
  })
  return <RouterProvider router={router}/>
}

root.render(
  <React.StrictMode>
    <Approutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
