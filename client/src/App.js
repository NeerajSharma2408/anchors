import './App.css';
import React from 'react';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import LandingPage from './components/landingPage/LandingPage';
import ServicePage from './components/servicesPage/ServicePage';

function App() {

  const [data, setData] = useState({});

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage setData={setData} />
    },
    {
      path: '/user',
      element: <ServicePage data={data}/>
    }
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
