import styles from "./Favoritos.module.css";
import Titulo from "../../components/Titulo/index";
import Cards from "../../components/Cards/index";
import Banner from "../../components/Banner";
import { useFavoritoContext } from "../../context/Favoritos";
//import videos from "../../json/db.json"

function Favoritos() {
  const { favorito } = useFavoritoContext();
  console.log(favorito);
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus filmes favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Cards {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
