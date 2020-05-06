import React from 'react';

import WithContainer from '../../hocs/withContainer';

export const Settings = () => {
  return (
    <WithContainer title="Paramètre d'affichage">
      <p>nb de tache à afficher input number min 1 max 20 default 3</p>
      <p>nb d'acivité à afficher input number min 1 max 20 default 5</p>
    </WithContainer>
  );
};
