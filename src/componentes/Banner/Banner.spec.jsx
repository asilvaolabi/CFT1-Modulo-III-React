import Banner from '.';
import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen} from '@testing-library/react';


describe("Testando o Banner component", () => {
    test("Meu primeiro teste", () => {
        expect(9 + 3).equal(12);
    });


    test('should render the image element', () => {
        // renderizando meu componente
        render(<Banner />);
        
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'O banner principal da minha aplicação');
    });

});