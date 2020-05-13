import React from 'react';

import WithContainer from '../../hocs/withContainer';
import SearchZone from '../../components/SearchZone/SearchZone';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

// class to func
// add contacts (firstName, lastname, email, phone)
// map les contacts --> nom ou prenom ou email ou tél

export const Search = () => {
  // Imagine you have a list of languages that you'd like to autosuggest.
  const suggestions = [
    {
      name: 'C',
      year: 1972,
    },
    {
      name: 'Elm',
      year: 2012,
    },
    {
      name: 'ccc',
      year: 2012,
    },
  ];

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : suggestions.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  return (
    <WithContainer title='Rerchercher un contact'>
      <p>
        On peut taper nom ou prenom ou email ou tél et la liste des ContactCard
        s'affiche au fur et à mesure qu'on tape à partir de 3 caractères
      </p>
      <SearchZone getSuggestions={getSuggestions} />
    </WithContainer>
  );
};
