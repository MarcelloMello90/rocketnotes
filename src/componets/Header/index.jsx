import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header (){
  return(
    <Container>
      <Profile to='/profile'>
        <img 
          src="https://github.com/MarcelloMello90.png" alt="Foto do usuario"/>
        <div>
          <span>Bem-vindo</span>
          <strong>Marcelo Melo</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}