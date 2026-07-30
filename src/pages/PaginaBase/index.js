import Cabecalho from "../../components/Cabecalho"
import Container from "../../components/container"
import Rodape from "../../components/rodape"
import FavoritosProvider from "../../context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase