import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

import CurrentWeatherDisplay from './CurrentWeatherDisplay';

const WeatherBoxDisplay = props => (
  <div className="weather-box-display">
    <CurrentWeatherDisplay
      currentWeather={props.currentWeather}
      tempColor={props.tempColor}
      currentIconOptions={props.currentIconOptions}
    />
    <div id="search-location">
      <h2>Check out the weather for a different location!</h2>
      <form onSubmit={props.handleLocationChange}>
        <PlacesAutocomplete inputProps={props.inputProps} />
        <button type="submit">Go there!</button>
      </form>
    </div>
  </div>
);

WeatherBoxDisplay.propTypes = {
  currentWeather: PropTypes.shape({
    currentTemp: PropTypes.number,
    currentSummary: PropTypes.string,
    currentDaySummary: PropTypes.string,
    currentWind: PropTypes.string,
    currentHumidity: PropTypes.string,
    currentVisibility: PropTypes.string,
    currentIcon: PropTypes.string
  }).isRequired,
  tempColor: PropTypes.string,
  currentIconOptions: PropTypes.objectOf(PropTypes.string),
  handleLocationChange: PropTypes.func.isRequired
};

WeatherBoxDisplay.defaultProps = {
  tempColor: '#00229E',
  currentIconOptions: {
    icon: 'CLEAR_NIGHT',
    color: '#FFFFFF',
    background: ''
  }
};

export default WeatherBoxDisplay;
