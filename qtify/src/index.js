import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App />
//     children: [
//       {
//         path: "/",
//         element: <HomePage/>
//       },
//       {
//         path: "/"
//         element: <AlbumPage/>
//       },
//     ],
//   },
// ])

//  const root = ReactDOM.createRoot(document.getElementById("Id"));
//  root.render(<RouterProvider router={router}/>);

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
        <Navbar/>
        <Hero/>
        </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')
);