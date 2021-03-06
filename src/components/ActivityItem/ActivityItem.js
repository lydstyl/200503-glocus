import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  thunkDeleteActivity,
  thunkSetActivity,
} from '../../actions/contactActions';

import { spaces } from '../../utils/cssVariables';

const ActivityBox = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    transform: rotate(-90deg);
    margin-left: ${spaces.s40};
  }

  [name='activity'] {
    margin-left: -70px;
    margin-right: ${spaces.s40};
  }
`;

const Activity = styled.textarea`
  width: 100%;
`;

export const ActivityItem = ({ contact, activity }) => {
  const dispatch = useDispatch();

  const { activityId, text, editedAt } = activity;

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
      <p>{new Date(editedAt).toLocaleDateString('fr-FR')}</p>
      <Activity
        key={activityId}
        name='activity'
        id={activityId}
        rows='4'
        defaultValue={text}
      ></Activity>

      <div className='activity-buttons'>
        <button onClick={handleSetActivity}>
          <span className='button-text'>Enregistrer</span>
        </button>
        <button onClick={handleDeleteActivity}>
          <span className='button-text'>Supprimer</span>
        </button>
      </div>
    </ActivityBox>
  );
};
