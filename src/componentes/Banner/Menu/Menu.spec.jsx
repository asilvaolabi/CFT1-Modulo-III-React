import React from 'react';
import Menu from '.';
import { describe, test, expect } from 'vitest';
import { render, screen} from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

describe("Testing the Menu component", () => {
   
    test('should render the correctly component', () => {
        render(
            <BrowserRouter>
              <Menu />
            </BrowserRouter>
        );
      
        //screen: maneiras de consumo pega e o getAllByRole: selecionar todos os elementos no DOM
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(3);
    
        // declarando uma variavel que tenha link com o atributo href
        const linkDestinations = links.map(link => link.getAttribute('href'));
        
        // esperando que o mapeamento seja igual
        expect(linkDestinations).toEqual(['/', '/formulario', '/sobre']);
    });
});
