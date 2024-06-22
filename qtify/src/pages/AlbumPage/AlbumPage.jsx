import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewAlbums } from "../../api/api";
import styles from "./AlbumPage.css";

function AlbumPage() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetchNewAlbums(albumId)
      .then((data) => {
        setAlbum(data);
      })
      .catch((error) => {
        console.error("Error fetching album details:", error);
      });
  }, [albumId]);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.albumPage}>
      <h2>{album.title}</h2>
      <img src={album.image} alt={album.title} className={styles.albumImage} />
      <p>{album.description}</p>
      <h3>Tracks</h3>
      <ul className={styles.tracklist}>
        {album.tracks.map((track, index) => (
          <li key={index}>{track.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumPage;
