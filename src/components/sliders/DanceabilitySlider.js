import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

// Slider Values 
const danceMarks = [
  {
    value: 0,
    label: 'i don\'t dance',
  },
  {
    value: 50,
    label: 'head boppin\'',
  },
  {
    value: 100,
    label: 'dancing queen',
  }
];

function valuetext(value) {
  return `${value}`;
}

// Slider Styling 
const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    display: 'inline-block',
    position: 'relative',
  },
  margin: {
    height: theme.spacing(3),
  },
}));


export default function DanceabilitySlider(props) {
  const classes = useStyles();
  const [danceabilityValue, setDanceabilityValue] = useState(50);

  const handleChange = (event, newValue) => {
    setDanceabilityValue(newValue);
    props.sliderChangeCallback('danceability', danceabilityValue);
  }

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={danceabilityValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={danceMarks}
        onChange={handleChange}
      />
    </div>
  );
}
