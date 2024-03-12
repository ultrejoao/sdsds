import React, { useState, useEffect } from 'react';

const receitasData = [
  {
    "id": 1,
    "titulo": "Macarrão com Molho de milho",
    "ingredientes":["500g de macarrão", "1 lata de milho", "Sal a gosto"]
  },
  {
    "id": 2,
    "titulo": "Strogonoff de carne",
    "ingredientes":["400g de Patinho picado", "1 lata de creme de leite", "Sal a gosto"]
  },
  {
    "id": 3,
    "titulo": "Fricasse",
    "ingredientes":["500g de frango desfiado", "1 lata de requeijão", "1 lata de creme de leite", "Sal a gosto"]
  }
];

const ApiData = ({ onDataFetched }) => {
  useEffect(() => {
    onDataFetched(receitasData);
  }, [onDataFetched]);

  return null;
};

export default ApiData;
