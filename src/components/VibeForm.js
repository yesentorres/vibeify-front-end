import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/Icon';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { sizing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import DanceabilitySlider from './sliders/DanceabilitySlider'
import EnergySlider from './sliders/EnergySlider'
import PositivitySlider from './sliders/PositivitySlider'
import PopularitySlider from './sliders/PopularitySlider'
import './VibeForm.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FE5596'
    }
  }
});

function VibeForm(props) {

  const [userInput, setUserInput] = useState({
    genre_inspiration: '',
    danceability: .5,
    energy: .5,
    valence: .5,
    popularity: 50
  });

  const [genreList, setGenreList] = useState(['']);
  const genreDefinition = 'The options you see here are an up to date list of all the music genres that Spotify currently has data for.'; 
  const danceabilityDefinition = 'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0 is least danceable and 100 is most danceable.'; 
  const energyDefinition = 'Energy is a measure from 0 to 100 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.'; 
  const popularityDefinition = 'The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.'; 
  const positivityDefinition = 'A measure from 0 to 100 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).'; 
  
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
      <MuiThemeProvider theme={theme}>

      
      <form className="1" onSubmit={onFormSubmit}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <h1>
            Set your Preferences:
          </h1>
        </Grid>

        <Grid item xs={6}>
          <Tooltip title={genreDefinition} placement="top">
          <IconButton aria-label="delete">
            <HelpOutlineIcon/>
          </IconButton>
          </Tooltip>
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
        <Tooltip title={danceabilityDefinition} placement="top">
          <IconButton aria-label="delete">
            <HelpOutlineIcon/>
          </IconButton>
          </Tooltip>
          <label className="vibe-form__form-label">Danceability: </label>
        </Grid>
      
        <Grid item xs={6}>
          < DanceabilitySlider sliderChangeCallback={onSliderChange}/>
        </Grid>

        <Grid item xs={6}>
        <Tooltip title={energyDefinition} placement="top">
          <IconButton aria-label="delete">
            <HelpOutlineIcon/>
          </IconButton>
          </Tooltip>
          <label className="vibe-form__form-label">Energy: </label>
        </Grid>

        <Grid item xs={6}>
          < EnergySlider sliderChangeCallback={onSliderChange}/>
        </Grid>

        <Grid item xs={6}>
        <Tooltip title={positivityDefinition} placement="top">
          <IconButton aria-label="delete">
            <HelpOutlineIcon/>
          </IconButton>
          </Tooltip>
          <label className="vibe-form__form-label">Positivity: </label>
        </Grid>

        <Grid item xs={6}>
          < PositivitySlider sliderChangeCallback={onSliderChange}/>
        </Grid>

        <Grid item xs={6}>
        <Tooltip title={popularityDefinition} placement="top">
          <IconButton aria-label="delete">
            <HelpOutlineIcon/>
          </IconButton>
          </Tooltip>
          <label className="vibe-form__form-label">Popularity: </label>
        </Grid>

        <Grid item xs={6}>
          < PopularitySlider sliderChangeCallback={onSliderChange}/>
        </Grid>

        <Grid item xs={12}>
          <input className="vibe-form__form-button"
            type="submit"
            value="Create Playlist"s
          />
        </Grid>
      </Grid>
      </form>
      </MuiThemeProvider>
    </div>
  );
}

export default VibeForm;