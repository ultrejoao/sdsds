
import React from 'react';
import { useParams } from 'react-router-dom';
import dadosReceitas from '../receitas.json';
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

const ReceitaDetalhes = () => {
  const { id } = useParams();




  const receitaSelecionada = dadosReceitas.find((receita) => receita.id === parseInt(id, 10));

  if (!receitaSelecionada) {
    return <p>Receita não encontrada.</p>;
  }

  return (
    <div Title style={{ fontFamily: 'Roboto' }}>
      <h2>Detalhes da Receita</h2>
      <p>ID: {receitaSelecionada.id}</p>
      <p>Título: {receitaSelecionada.titulo}</p>
      <p>Ingredientes: {receitaSelecionada.ingredientes.join(', ')}</p>
    </div>
  );
};

export default ReceitaDetalhes;
