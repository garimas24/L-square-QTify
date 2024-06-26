import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import './index.css';
import { fetchFilters, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';

function App() {
  const [data, setData] = useState({});
  
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums());
    generateData("newAlbums", fetchNewAlbums());
    generateData("songs", fetchSongs());
    generateData("genres", fetchFilters)
  }, []);

      const {topAlbums =[], newAlbums=[], songs = [], genres=[]} = data;
  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
      <Outlet context={{ data: { topAlbums, newAlbums, songs, genres } }} />
    </StyledEngineProvider>
  );
}

export default App;




// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Card from "./components/Card/Card";
// // import Song from "./components/Song";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <Card />
//       {/* <Song /> */}
//     </div>
//   );
// }

// export default App;

