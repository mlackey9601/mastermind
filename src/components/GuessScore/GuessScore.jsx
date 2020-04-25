import React from 'react';
import './GuessScore.css';

const GuessScore = ({ score }) => {
  let scores = ('P'.repeat(score.perfect) + 'A'.repeat(score.almost) +
    'I'.repeat(4 - score.perfect - score.almost)).split('');
  
  let baseStyle = {
    width: 10,
    height: 10,
    margin: 1,
    border: '2px solid',
    borderRadius: '50%'
  };

  let pegStyles = {
    'P': {
      borderColor: '#000000',
      backgroundColor: '#000000'
    },
    'A': {
      borderColor: '#000000',
      backgroundColor: '#ffffff'
    },
    'I': {
      borderColor: '#ffffff',
      backgroundColor: '#8f8f8f'
    }
  };
  
  return (
    <div className='GuessScore'>
      {scores.map((score, idx) =>
        <div
          key={idx}
          style={{...baseStyle, ...pegStyles[score]}} />
      )}
    </div>
  );
}

export default GuessScore;
