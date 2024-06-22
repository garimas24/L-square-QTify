import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from "./pages/HomePages/HomePage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/album/:albumId",
        element: <AlbumPage />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);





//  const root = ReactDOM.createRoot(document.getElementById("Id"));
//  root.render(<RouterProvider router={router}/>);

// ReactDOM.render(
//   <React.StrictMode>
//         <BrowserRouter>
//         <Navbar/>
//         <Hero/>
//         <Card/>
//         </BrowserRouter>
//   </React.StrictMode>,
//    document.getElementById('root')
// );