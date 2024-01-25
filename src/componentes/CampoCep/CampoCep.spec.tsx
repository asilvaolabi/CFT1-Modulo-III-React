// Arquivo: CampoCep.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CampoCep from '.';


describe("Testing the CampoCep component", () => {
    test('renders CampoCep component', () => {
        const { getByLabelText } = render(
          <CampoCep
            label="CEP"
            labelEndereco="Endereço"
            aoPreencherEndereco={() => {}}
          />
        );
      
        const cepLabel = getByLabelText(/CEP/i);
        const enderecoLabel = getByLabelText(/Endereço/i);
      
        expect(cepLabel).toBeInTheDocument();
        expect(enderecoLabel).toBeInTheDocument();
      });

});

