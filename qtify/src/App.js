import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import './index.css';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';

function App() {
  const [data, setData] = useState({});
  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  const generateData = async (key, source) => {
    try {
      const result = await source;
      setData((prevState) => ({
        ...prevState,
        [key]: result,
      }));
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
    }
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums());
    generateData("newAlbums", fetchNewAlbums());
    generateData("songs", fetchSongs());
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
    </StyledEngineProvider>
  );
}

export default App;
