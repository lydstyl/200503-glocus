import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { thunkDeleteActivity } from '../../actions/contactActions';

const ActivityBox = styled.div`
  /* width: 100%; */
`;

const Activity = styled.textarea`
  width: 100%;
`;

export const ActivityItem = ({ contact, activity }) => {
  const dispatch = useDispatch();

  const handleDeleteActivity = () => {
    dispatch(thunkDeleteActivity(contact, activity.createdAt));
  };

  return (
    <ActivityBox>
      <Activity
        key={activity.createdAt}
        name='activity'
        id={activity.createdAt}
        rows='4'
        defaultValue={activity.text}
      ></Activity>

      <button>Enregistrer</button>
      <button onClick={handleDeleteActivity}>Supprimer</button>
    </ActivityBox>
  );
};
