import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import style from "./Cabecalho.module.css";
import Cabecalholink from "../Cabecalholink";
function Cabecalho() {
  return (
    <header className={style.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do Cinetag" />
      </Link>
      <nav>
        <Cabecalholink url="./">Home</Cabecalholink>
        <Cabecalholink url="./favoritos">Favoritos</Cabecalholink>
      </nav>
    </header>
  );
}

export default Cabecalho;
