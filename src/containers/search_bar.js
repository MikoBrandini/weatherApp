import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div className="input-field ">
          <input
            placeholder="Get a Five Day Forecast In Your Favorite Cities"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
        <span className="input-group-button">
        <button type="submit" className="waves-effect waves-light btn">Submit</button>
        </span>
        <br />
      </form>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
