// // src/Section.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Grid, Typography, Button } from "@mui/material";
// import Card from "./Card";

// const Section = ({ title, endpoint }) => {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const response = await axios.get(endpoint);
//         setAlbums(response.data);
//       } catch (error) {
//         console.error("Error fetching albums data:", error);
//       }
//     };

//     fetchAlbums();
//   }, [endpoint]);

//   return (
//     <div style={{ padding: "16px" }}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h4">{title}</Typography>
//         <Button variant="contained">Collapse</Button>
//       </div>
//       <Grid container spacing={2} style={{ marginTop: "16px" }}>
//         {albums.map((album) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
//             <Card
//               image={album.image}
//               follows={album.follow_count}
//               title={album.title}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Section;
