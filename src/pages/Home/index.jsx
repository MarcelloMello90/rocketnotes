import { FiPlus, FiSearch } from'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../componets/Note';
import { Input } from '../../componets/Input';
import { Header } from '../../componets/Header';
import { Section } from '../../componets/Section';
import { ButtonText } from '../../componets/ButtonText';

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
       <li><ButtonText title="Todos" isActive/></li>
       <li><ButtonText title="React"/></li>
       <li><ButtonText title="Nodejs"/></li>
      
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title='Minhas notas'>
          <Note data={{
            title: 'React',
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'rocketseat'},
            ]
          }}
          />

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  )
};