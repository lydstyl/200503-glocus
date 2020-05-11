import React from 'react';

import WithContainer from '../../hocs/withContainer';
import { InputField } from '../../components/InputField/InputField';

export const Search = () => {
  return (
    <WithContainer title='Rechercher un contact'>
      <InputField
        type='search'
        minlength='3'
        name='query'
        label='Rechercher'
        placeholder='Dupond ou Jean ou jean@ ou 0781'
      />

      <p>
        on peut taper nom ou prenom ou email ou tél et la liste des ContactCard
        s'affiche au fur et à mesure qu'on tape à partir de 3 caractères
      </p>
    </WithContainer>
  );
};
