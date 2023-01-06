import React from 'react';
import PropTypes from 'prop-types';

import './timeLine.scss';

const TimeLine = ({ timeLines }) => (
  <div id="timeLine">
    <div className="container">
      {timeLines && timeLines.map((timeLine) => (
        <div key={timeLine.title} className="wrapper">
          <div className="dot" />
          <div className="timeLineCard">
            <h3>{timeLine.title}</h3>
            <p>{timeLine.period}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

TimeLine.propTypes = {
  timeLines: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TimeLine;
