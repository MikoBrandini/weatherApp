import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length)
}

function kelToFaren(kel){
return (kel-273.15)*1.8+32
}

export default (props) => {
  const kelvinAverage= average(props.data)
  return (
      <span>
          <Sparklines data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <span>{Math.round(kelToFaren(kelvinAverage))} {props.units}</span>
      </span>
    );
}
