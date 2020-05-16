import React from 'react';
import { useSelector } from 'react-redux';

import WithContainer from '../../hocs/withContainer';
import { StyledSearch } from './StyledSearch';
import SearchZone from '../../components/SearchZone/SearchZone';

export const Search = () => {
  const contacts = useSelector((state) => state.contacts);

  // Imagine you have a list of languages that you'd like to autosuggest.
  // const suggestions = [
  //   {
  //     name: 'C',
  //     year: 1972,
  //   },
  //   {
  //     name: 'Elm',
  //     year: 2012,
  //   },
  //   {
  //     name: 'ccc',
  //     year: 2012,
  //   },
  // ];

  const lastNames = contacts.map((c) => ({
    name: c.lastName,
    contact: c,
  }));

  const firstNames = contacts.map((c) => ({
    name: c.firstName,
    contact: c,
  }));

  const companies = contacts.map((c) => ({
    name: c.company,
    contact: c,
  }));

  const phones = contacts.map((c) => ({
    name: c.phone,
    contact: c,
  }));

  const emails = contacts.map((c) => ({
    name: c.email,
    contact: c,
  }));

  const suggestions = [
    ...lastNames,
    ...firstNames,
    ...companies,
    ...phones,
    ...emails,
  ];

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : suggestions.filter(
          (suggestion) =>
            suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  return (
    <WithContainer title='Rerchercher un contact'>
      <StyledSearch>
        <SearchZone getSuggestions={getSuggestions} />
      </StyledSearch>
    </WithContainer>
  );
};
