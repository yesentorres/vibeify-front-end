import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

// Slider Values 
const energyMarks = [
  {
    value: 0,
    label: 'chamomille tea',
  },
  {
    value: 50,
    label: 'half-caf',
  },
  {
    value: 100,
    label: 'triple espresso',
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


export default function EnergySlider(props) {
  const classes = useStyles();
  const [energyValue, setEnergyValue] = useState(50);

  const handleChange = (event, newValue) => {
    setEnergyValue(newValue);
    props.sliderChangeCallback('energy', energyValue);
  }

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={energyValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={energyMarks}
        onChange={handleChange}
      />
    </div>
  );
}
