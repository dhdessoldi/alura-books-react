import styled from 'styled-components';
import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo';
import CardRecomendados from '../CardRecomendados';
import imagemLivro from '../../assets/livro2.png'

const Container = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function LatestReleases() {
  return (
    <Container>
      <Titulo cor='#EB9B00'>Últimos lançamentos!</Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => (
          <img key={livro.id} src={livro.src} placeholder={livro.nome} alt={livro.nome} />
        ))}
      </NovosLivrosContainer>
      <CardRecomendados
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </Container>
  )
}
