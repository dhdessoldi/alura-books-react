import styled from 'styled-components';
import Input from '../Input';
import { useEffect, useState } from 'react';
import { getLivros } from '../../services/livros';
import livroImg from '../../assets/livro.png';
import { postFavorito } from '../../services/favoritos';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: auto;
  width: 100%;
`
const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
      width: 200px;
  }
  img {
      width: 100px;
  }
  &:hover {
      border: 1px solid white;
  }
`

export default function Search() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros()
  }, [])

  async function fetchLivros() {
    const livrosAPI = await getLivros();
    setLivros(livrosAPI);
  }

  async function insertFavorito(id) {
    await postFavorito(id)
  }

  const handleChange = (event) => {
    const textoDigitado = event.target.value
    const resultado = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
    if (textoDigitado === '') {
      setLivrosPesquisados([])
    } else {
      setLivrosPesquisados(resultado)
    }
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        type='text'
        placeholder='Escreva sua próxima leitura'
        onChange={handleChange}
      />
      {livrosPesquisados.map(livro => (
        <Resultado key={livro.id} onClick={() => insertFavorito(livro.id)}>
          <p>{livro.nome}</p>
          <img src={livroImg} alt="Capa do livro" />
        </Resultado>
      ))}
    </PesquisaContainer>
  )
}
