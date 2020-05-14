import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import WithContainer from '../../hocs/withContainer';
import { InputField } from '../../components/InputField/InputField';
import { thunkSetSettings } from '../../actions/settingsActions';

export const Settings = () => {
  const dispatch = useDispatch();

  const [settings, setSettings] = useState({
    maxContactsToShow: 2, // todo get settings from firebase
    showContactIfLastActivityOlderThen: 7,
    maxActivitiesToShow: 2,
  });

  const {
    maxContactsToShow,
    showContactIfLastActivityOlderThen,
    maxActivitiesToShow,
  } = settings;

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);

    setSettings({
      ...settings,
      [name]: value,
    });
  };

  const handleSaveSettings = (evt) => {
    evt.preventDefault();

    dispatch(thunkSetSettings(settings));
  };

  return (
    <WithContainer title="Paramètre d'affichage">
      <InputField
        onChange={handleInputChange}
        type='number'
        name='maxContactsToShow'
        value={maxContactsToShow}
        label="Nombre maximum de contacts a afficher sur la page d'accueil"
        max='100'
        min='1'
      />

      <InputField
        onChange={handleInputChange}
        type='number'
        name='showContactIfLastActivityOlderThen'
        value={showContactIfLastActivityOlderThen}
        label='Afficher uniquement ceux dont la dernière activité est vieille de x jour(s)'
        max='365'
        min='1'
      />

      <InputField
        onChange={handleInputChange}
        type='number'
        name='maxActivitiesToShow'
        value={maxActivitiesToShow}
        label="Nombre maximum d'activitées à afficher sur la page détail d'un contact"
        max='20'
        min='1'
      />

      <button onClick={handleSaveSettings}>Sauver</button>
    </WithContainer>
  );
};
