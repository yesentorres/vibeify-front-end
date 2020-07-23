import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

// Slider Values 
const positiveMarks = [
  {
    value: 0,
    label: '🙁',
  },
  {
    value: 50,
    label: '😐',
  },
  {
    value: 100,
    label: '🤠',
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


export default function PositivitySlider(props) {
  const classes = useStyles();
  const [positivityValue, setPositivityValue] = useState(50);

  const handleChange = (event, newValue) => {
    setPositivityValue(newValue);
    props.sliderChangeCallback('valence', positivityValue);
  }

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={positivityValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={positiveMarks}
        onChange={handleChange}
      />
    </div>
  );
}
