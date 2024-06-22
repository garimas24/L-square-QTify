import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";
import Hero from "../../components/Hero/Hero";
import styles from "./HomePage.css";

export default function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <div title="Top Albums" data={topAlbums} type="album" />
        <div title="New Albums" data={newAlbums} type="album" />
        <div
          title="Songs"
          data={songs}
          filteredSource={fetchFilters}
          type="song"
        />
      </div>
    </>
  );
}
