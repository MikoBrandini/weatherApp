import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp );

    const {lon, lat} = cityData.city.coord;

    console.log(cityData.list)

    return (
      <div className="cityContainer" key={name}>
        <div className="card-content">
        <GoogleMap lon={lon} lat={lat} />
        <Chart className="tempInfo" data={temps} color="#9708CC " units="°F" />

        </div>
      </div>
      );
  }

  render() {
    return(
       <div>

        { this.props.weather.map(this.renderWeather) }

      </div>
      );
   }
}

function mapStateToProps({ weather }) {
  //weather reducer to weather key in reducer index(combinedReducers)
  return { weather }
  //same thing as weather: state.weather ({weather: weather})
}

export default connect(mapStateToProps)(WeatherList);
