import React from 'react';
import { render, screen } from '@testing-library/react';
import Botao from '.';

describe('Testing the Botão component', () => {

  test('renders button with correct class and children', () => {
    const buttonText = 'Clique aqui';

    render(<Botao>{buttonText}</Botao>);

    const buttonElement = screen.getByText(buttonText);
    
    // Verifica se o botão foi renderizado corretamente
    expect(buttonElement).toBeInTheDocument();

    // Verifica se o botão possui a classe 'botao'
    expect(buttonElement).toHaveClass('botao');
  });
});
