import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import {useRouter} from 'next/router'
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BackgroundImage = styled.div`
background-image: url(${db.bg});
flex: 1;
background-size: cover;
background-position: center;

`; */
export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState('')
  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Pokequiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
        <Widget.Header><h1>Cadastro</h1></Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosEvento) {
              infosEvento.preventDefault()
              router.push(`/quiz?name=${name}`)
            }}>
              <Input  
                name="nomeUser"
                onChange={ (infosEvento) => { setName(infosEvento.target.value); }}
                placeholder="Fala teu nome :)"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header><h1>Pallet</h1></Widget.Header>
          <Widget.Content>
            <p>
              Pallet é uma cidade fictícia em Kanto que serve como ponto de partida do personagem
              principal em Pokémon Red, Blue, Yellow, Pokémon FireRed e LeafGreen,
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header><h1>Veridian</h1></Widget.Header>
          <Widget.Content>
            <p>
              Há muitas coisas importantes aqui, como o último ginásio que o jogador enfrenta
              e os primeiros Centro Pokémon e Loja Pokémon do jogo
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rijema/pokequiz" />
    </QuizBackground>
  );
}
