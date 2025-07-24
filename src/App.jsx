import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CrewmateDetails from './pages/CrewmateDetails'
import CrewmateGallery from './pages/CrewmateGallery'
import NewCrewmate from './pages/NewCrewmate'
import UpdateCrewmate from './pages/UpdateCrewmate'
import SideNav from './pages/SideNav'
import { Link } from 'react-router-dom'


const App = () => {

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<HomePage />
    },
    {
      path: "/gallery",
      element:<CrewmateGallery />
    },
    {
      path:"/details/:id",
      element: <CrewmateDetails />
    },
    {
      path:"/edit/:id",
      element: <UpdateCrewmate />
    },
    {
      path:"/new",
      element: <NewCrewmate />
    }
  ]);

  return ( 

    <div className="App">
      <SideNav />
        {element}
    </div>

  )
}

export default App
