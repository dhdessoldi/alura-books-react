import { useEffect, useState } from "react"
import { deleteFavorito, getFavoritos } from "../../services/favoritos";
import styled from "styled-components";
import livroImg from '../../assets/livro.png';


const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
`
export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosAPI = await getFavoritos()
    setFavoritos(favoritosAPI)
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id);
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <div>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ResultadoContainer>
        {
          favoritos.length !== 0 ? favoritos.map(favorito => (
            <Resultado key={favorito.nome} onClick={() => deletarFavorito(favorito.id)}>
              <p>{favorito.nome}</p>
              <img src={livroImg} alt="Capa do livro" />
            </Resultado>
          )) : null
        }
      </ResultadoContainer>
    </div>
  )
}
