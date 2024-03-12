
import React, { useState } from 'react';

const AdicionarReceita = ({ onAdicionarReceita }) => {
  const [novaReceita, setNovaReceita] = useState({
    titulo: '',
    ingredientes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaReceita((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdicionar = () => {
    if (novaReceita.titulo.trim() === '') {
      alert('Por favor, preencha o título da receita.');
      return;
    }

    onAdicionarReceita(novaReceita);

    setNovaReceita({
      titulo: '',
      ingredientes: [],
    });
  };

  return (
    <div>
      <h2>Adicionar Nova Receita</h2>
      <label>
        Título:
        <input type="text" name="titulo" value={novaReceita.titulo} onChange={handleChange} />
      </label>
      <br />
      <label>
        Ingredientes:
        <input type="text" name="ingredientes" value={novaReceita.ingredientes} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleAdicionar}>Adicionar Receita</button>
    </div>
  );
};

export default AdicionarReceita;
