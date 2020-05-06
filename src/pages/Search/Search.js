import React from 'react';

import WithContainer from '../../hocs/withContainer';

export const Search = () => {
  return (
    <WithContainer title='Rechercher un contact'>
      <p>
        input dans lequel on peut taper nom ou prenom ou email ou tél et la
        liste des ContactCard ou ContactItem s'affiche au fur et à mesure qu'on
        tape à partir de 3 caractères
      </p>
    </WithContainer>
  );
};
