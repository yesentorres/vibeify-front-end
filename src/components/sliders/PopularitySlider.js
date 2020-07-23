import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

// Slider Values 
const popularityMarks = [
  {
    value: 0,
    label: 'hipsters only',
  },
  {
    value: 50,
    label: 'heard \'em somewhere',
  },
  {
    value: 100,
    label: 'radio bops',
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


export default function PopularitySlider(props) {
  const classes = useStyles();
  const [popularityValue, setPopularityValue] = useState(50);

  const handleChange = (event, newValue) => {
    setPopularityValue(newValue);
    props.sliderChangeCallback('popularity', popularityValue);
  }

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={popularityValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={popularityMarks}
        onChange={handleChange}
      />
    </div>
  );
}