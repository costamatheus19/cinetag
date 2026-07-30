import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import Titulo from "../../components/Titulo";
import { useEffect, useState } from "react";
import styles from "../../pages/Inicio/Inicio.module.css";
function Inicio() {
  const [videos, setVideos] = useState ([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/costamatheus19/cinetag-api/videos",
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  });
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus titulos e filmes favoritos.</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Cards {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
export default Inicio;
