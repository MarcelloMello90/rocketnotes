import { Link } from 'react-router-dom';

import { Header } from '../../componets/Header';
import { Input } from '../../componets/Input';
import { Textarea } from '../../componets/Textarea';
import { NoteItem } from '../../componets/NoteItem';
import { Section } from '../../componets/Section';
import { Button } from '../../componets/Button';

import { Container, Form } from './styles';

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Nova tag"/>
            </div>
          </Section>

          <Button title="Fechar"/>
        </Form>
      </main>
    </Container>  
  )
}