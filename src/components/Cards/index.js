import styles from "../Cards/Cards.module.css";
import iconeFavoritar from "../../assets/favoritar.png";
import iconeDesfavoritar from "../../assets/desfavoritar.png";
import { useFavoritoContext } from "../../context/Favoritos";
import { Link } from "react-router-dom";

function Cards({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeDesfavoritar : iconeFavoritar;
  return (
    <div className={styles.container}>
      <Link className={styles.Link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img src={icone}
        alt="Favoritar Filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Cards;
