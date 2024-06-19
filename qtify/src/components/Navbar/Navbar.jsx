import React from 'react';
import { AppBar, Toolbar, Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
 import { Link } from 'react-router-dom';
 import logo from '../../assets/logo.png';    
import Button from '../Button/Button';
import styles from './Navbar.module.css';
import { green } from '@mui/material/colors';


const Navbar = () => {
  return (
    // <h1>Hello</h1>
    <AppBar position="static"  style={{backgroundColor:green}}
    className={styles.navbar}>
      <Toolbar>
        <Box className={styles.logoContainer}>
          <Link to="/">
            <img src={logo}  alt="Logo" className={styles.logo} />
          </Link>
        </Box>
        <Box className={styles.searchContainer}>
          <Box className={styles.searchBox}>
            <SearchIcon className={styles.searchIcon} />
            <InputBase
              placeholder="Search a song of your choice"
              inputProps={{ 'aria-label': 'search' }}
              className={styles.searchInput}

            />
          </Box>
        </Box>

        <Box className={styles.buttonContainer}>
          <Button text="Give Feedback" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
