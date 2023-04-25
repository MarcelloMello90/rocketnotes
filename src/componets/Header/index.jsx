import { Container, Profile } from "./styles";

export function Header (){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/MarcelloMello90.png" alt="Foto do usuario"/>
        <div>
          <span>Bem-vindo</span>
          <strong>Marcelo Melo</strong>
        </div>
      </Profile>
    </Container>
  )
}