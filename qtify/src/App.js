// import Logo from './logo.svg';
// import React,{useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import { Route } from 'react-router-dom';
import { Switch } from '@mui/material';
import Hero from './components/Hero/Hero';
// import 'index.css'

function App() {
  // const [data, setData] = useState({})
  // const {topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    // <>
    // <StyledEngineProvider >
    //   <Navbar />
    // {/* searchData={[...topAlbums, ...newAlbums]}/> */}
    //   {/* <Outlet context = {{ data: {topAlbums, newAlbums, songs}}} /> */}
    // </StyledEngineProvider>
    // </>
      <div className= "App">
      <Switch>
        <Route exact path="/navbar">
        <Route exact path ="/hero">
        </Route>
        </Route>
      </Switch>
      </div>

  );
}

export default App;
