import React from 'react';
import {
  useDispatch,
  //useSelector
} from 'react-redux';
import { useParams } from 'react-router-dom';

import { thunkDeleteContact } from '../../actions/contactActions';

import WithContainer from '../../hocs/withContainer';

export const ContactPage = () => {
  const { id } = useParams();

  //const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(thunkDeleteContact(id));
  };

  return (
    <WithContainer title='Détail du contact'>
      <button onClick={handleDeleteContact}>Supprimer le contact</button>
    </WithContainer>
  );
};
