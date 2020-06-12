import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { thunkSetSettings } from "../../actions/settingsActions";
import WithContainer from "../../hocs/withContainer";
import { StyledSettings } from "./StyledSettings";
import { InputField } from "../../components/InputField/InputField";

export const Settings = () => {
  const settings = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  const [state, setSettings] = useState({
    maxContactsToShow: settings.maxContactsToShow,
    showContactIfLastActivityOlderThen:
      settings.showContactIfLastActivityOlderThen,
    maxActivitiesToShow: settings.maxActivitiesToShow,
    categories: settings.categories || null,
    category: settings.category || null,
  });

  const {
    maxContactsToShow,
    showContactIfLastActivityOlderThen,
    maxActivitiesToShow,
  } = state;

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setSettings({
      ...state,
      [name]: value,
    });
  };

  const handleSaveSettings = (evt) => {
    evt.preventDefault();

    dispatch(thunkSetSettings(state));
  };

  return (
    <WithContainer title="Paramètre d'affichage">
      <StyledSettings>
        {state.categories && (
          <select onChange={handleInputChange} name="category">
            {state.categories.map((c) => {
              if (c === state.category) {
                return (
                  <option selected value={c}>
                    {c}
                  </option>
                );
              } else {
                return <option value={c}>{c}</option>;
              }
            })}
          </select>
        )}

        <InputField
          onChange={handleInputChange}
          type="number"
          name="maxContactsToShow"
          value={maxContactsToShow}
          label="Nombre maximum de contacts a afficher sur la page d'accueil"
          max="100"
          min="1"
        />

        <InputField
          onChange={handleInputChange}
          type="number"
          name="showContactIfLastActivityOlderThen"
          value={showContactIfLastActivityOlderThen}
          label="Afficher uniquement ceux dont la dernière activité est vieille de x jour(s)"
          max="365"
          min="0"
        />

        <InputField
          onChange={handleInputChange}
          type="number"
          name="maxActivitiesToShow"
          value={maxActivitiesToShow}
          label="Nombre maximum d'activitées à afficher sur la page détail d'un contact"
          max="20"
          min="1"
        />

        <div className="button-box">
          <button onClick={handleSaveSettings}>Sauver</button>
        </div>
      </StyledSettings>
    </WithContainer>
  );
};
