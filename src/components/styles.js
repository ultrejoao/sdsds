import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe o Link aqui


export const Title = styled.h1`
    color: #008dd5;
    text-align: center;
    transition: 0.3s;
    
    
`;

export const Card = styled.h1`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
    text-decoration: none;
    text-align: center;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  
  color: #fff;
  text-align: center;
  padding: 10px;
`;

export const RecipeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const RecipeItem = styled.li`
  margin-bottom: 10px;
`;

export const RecipeLink = styled(Link)`
  text-decoration: none;
  color: #3498db;

  &:hover {
    text-decoration: none; // Remover o sublinhado no hover
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px auto;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
    background-color: #3498db;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #3498db;
  }
`;







