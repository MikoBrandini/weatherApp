import React, { Component } from 'react';

import NavBar from '../containers/nav_bar';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
    <div>
      <NavBar />
      <SearchBar />
      <WeatherList />
    </div>
    );
  }
}
