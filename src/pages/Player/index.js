import styles from "./Player.module.css";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "../NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/costamatheus19/cinetag-api/videos?id=${id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(dados[0]);
      });
  }, [id]);

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>

      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </section>
    </>
  );
}

export default Player;