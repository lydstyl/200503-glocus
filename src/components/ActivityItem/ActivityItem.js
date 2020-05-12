import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  thunkDeleteActivity,
  thunkSetActivity,
} from '../../actions/contactActions';

const ActivityBox = styled.div`
  /* width: 100%; */
`;

const Activity = styled.textarea`
  width: 100%;
`;

export const ActivityItem = ({ contact, activity }) => {
  const dispatch = useDispatch();

  const { activityId, text } = activity;

  const handleDeleteActivity = () => {
    dispatch(thunkDeleteActivity(contact, activityId));
  };

  const handleSetActivity = () => {
    const newText = document.getElementById(activityId).value;
    activity.text = newText;
    dispatch(thunkSetActivity(contact, activity));
  };

  return (
    <ActivityBox>
      <Activity
        key={activityId}
        name='activity'
        id={activityId}
        rows='4'
        defaultValue={text}
      ></Activity>

      <button onClick={handleSetActivity}>Enregistrer</button>
      <button onClick={handleDeleteActivity}>Supprimer</button>
    </ActivityBox>
  );
};
