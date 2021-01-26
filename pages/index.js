import styled from 'styled-components'
import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const BackgroundImage = styled.div`
background-image: url(${db.bg});
flex: 1;
background-size: cover;
background-position: center;

`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
 
  <QuizBackground backgroundImage={db.bg}> 
    <QuizContainer>
     <Widget>
      <Widget.Header><h1>Pallet</h1></Widget.Header>
       <Widget.Content>
          <p>Pallet é uma cidade fictícia em Kanto que serve como ponto de partida do personagem
             principal em Pokémon Red, Blue, Yellow, Pokémon FireRed e LeafGreen,</p>
       </Widget.Content>
     </Widget>
     <Widget>
      <Widget.Header><h1>Veridian</h1></Widget.Header>
       <Widget.Content>
          <p>Há muitas coisas importantes aqui, como o último ginásio que o jogador enfrenta
             e os primeiros Centro Pokémon e Loja Pokémon do jogo</p>
       </Widget.Content>
     </Widget>
     <Footer />
    </QuizContainer>
    <GitHubCorner projectUrl="https://github.com/rijema"/>
  </QuizBackground>
  )
}
