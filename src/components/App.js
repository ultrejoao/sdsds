// src/components/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import ApiData from './ApiData';
import AdicionarReceita from './AdicionarReceita';
import ReceitaDetalhes from './ReceitaDetalhes';
import {
  Title,
  Container,
  Header,
  RecipeList,
  RecipeItem,
  RecipeLink,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Card,
} from './styles';

const ListaReceitas = ({ receitas }) => {
  return (
    <RecipeList Title style={{ fontFamily: 'Roboto' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {receitas.map((receita) => (
          <RecipeItem key={receita.id}>
            <RecipeLink to={`/receita/${receita.id}`}>{receita.titulo}</RecipeLink>
          </RecipeItem>
        ))}
      </ul>
    </RecipeList>
  );
};

const BotaoAdicionar = () => (
  <FormButton as={Link} to="/adicionar">
    Adicionar Nova Receita
  </FormButton>
);

const App = () => {
  const [receitas, setReceitas] = useState([]);

  const handleDataFetched = (data) => {
    setReceitas(data);
  };

  const adicionarReceita = (novaReceita) => {
    setReceitas((prevReceitas) => [...prevReceitas, { ...novaReceita, id: prevReceitas.length + 1 }]);
  };

  return (
    <Router>
      <Container>
        <Header>
          <Title style={{ fontFamily: 'Roboto' }}>MINHAS RECEITAS</Title>
        </Header>
        <ApiData onDataFetched={handleDataFetched} />
        <Card>
          <Routes>
            <Route path="/" element={<ListaReceitas receitas={receitas} />} />
            <Route path="/adicionar" element={<AdicionarReceita onAdicionarReceita={adicionarReceita} />} />
            <Route path="/receita/:id" element={<ReceitaDetalhes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <BotaoAdicionar />
        </Card>
      </Container>
    </Router>
  );
};

export default App;
