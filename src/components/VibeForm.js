import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { sizing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import DanceabilitySlider from './sliders/DanceabilitySlider'
import EnergySlider from './sliders/EnergySlider'
import PositivitySlider from './sliders/PositivitySlider'
import PopularitySlider from './sliders/PopularitySlider'

function VibeForm(props) {

  const [userInput, setUserInput] = useState({
    genre_inspiration: '',
    danceability: .5,
    energy: .5,
    valence: .5,
    popularity: 50
  });

  const [genreList, setGenreList] = useState(['']);

  useEffect ( () => {
    // load genres
    axios.get('http://localhost:5000/get-genres')
    .then( (response) => {
      console.log(response);

      const retrievedGenres = [...genreList, ...response.data.genres]
      setGenreList(retrievedGenres);
    })
    .catch( (error) => {
      console.log(error);
    });
  }, []);

  const onSliderChange = (attribute, newValue) => {
    const newUserInput = {
      ...userInput,
    }

    if (attribute === 'popularity') {
      newUserInput[attribute] = newValue;
    } else {
      newUserInput[attribute] = newValue*.01;
    }
      
    setUserInput(newUserInput);
  }

  const onInputChange = (event) => {
    const newUserInput = {
      ...userInput,
    }

    newUserInput[event.target.name] = event.target.value;

    setUserInput(newUserInput);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`post ${userInput}`)
    // generate playlist
    axios.post('http://localhost:5000/recommendation-generator', { params: userInput })
    .then((response) => {
      console.log(response);
      props.onSubmitCallback(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

    setUserInput({
      genre_inspiration: '',
      danceability: '',
      energy: '',
      valence: '',
      popularity: ''
    });
  }
  console.log(userInput);
  return (
    <div className="vibe-form">
      <form className="vibe-form__form" onSubmit={onFormSubmit}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          Enter Preferences:
        </Grid >

        <Grid item xs={6}>
          <label className="vibe-form__form-label">Genre: </label>
        </Grid>
      
        <Grid item xs={6}>
          <select className="vibe-form__form-select"
            id="genre_inspiration"
            name="genre_inspiration"
            onChange={onInputChange}
            value={userInput.genre_inspiration}
          >
            { genreList.map(genreName => 
              <option value={genreName} key={genreName}> {genreName} </option>)
            }
          </select>
        </Grid>

        <Grid item xs={6}>
          <label className="vibe-form__form-label">Danceability: </label>
        </Grid>
      
        <Grid item xs={6}>
          < DanceabilitySlider sliderChangeCallback={onSliderChange}/>
        </Grid>

        <Grid item xs={6}>
          <label className="vibe-form__form-label">Energy: </label>
        </Grid>

        <Grid item xs={6}>
          < EnergySlider sliderChangeCallback={onSliderChange}/>
        </Grid>

        <Grid item xs={6}>
          <label className="vibe-form__form-label">Positivity: </label>
        </Grid>

        <Grid item xs={6}>
          < PositivitySlider sliderChangeCallback={onSliderChange}/>
        </Grid>

        <Grid item xs={6}>
          <label className="vibe-form__form-label">Popularity: </label>
        </Grid>

        <Grid item xs={6}>
          < PopularitySlider sliderChangeCallback={onSliderChange}/>
        </Grid>

        <Grid item xs={12}>
          <input className="vibe-form__form-button"
            type="submit"
            value="Create Playlist"
          />
        </Grid>
      </Grid>
      </form>
    </div>
  );
}

export default VibeForm;