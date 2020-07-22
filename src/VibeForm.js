import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { sizing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import DanceabilitySlider from './DanceabilitySlider'
import EnergySlider from './EnergySlider'
import PositivitySlider from './PositivitySlider'
import PopularitySlider from './PopularitySlider'


function VibeForm(props) {

  const [userInput, setUserInput] = useState({
    genre_inspiration: '',
    danceability: .5,
    energy: .5,
    valence: .5,
    popularity: .5
  });

  const [genreList, setGenreList] = useState(['']);

  useEffect ( () => {
    // local: http://localhost:5000/get-genres
    // deployed: https://vibeify-back-end.herokuapp.com/get-genres
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

    newUserInput[attribute] = newValue*.01;

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
    // local: http://localhost:5000/recommendation-generator
    // deployed: https://vibeify-back-end.herokuapp.com/recommendation-generator
    axios.post('http://localhost:5000/recommendation-generator', { params: userInput })
    .then((response) => {
      console.log(response);
      props.onSubmitCallback(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

    // clear user input
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

        <label className="vibe-form__form-label">Genre: </label>
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

        <label className="vibe-form__form-label">Danceability: </label>
        < DanceabilitySlider sliderChangeCallback={onSliderChange}/>

        <label className="vibe-form__form-label">Energy: </label>
        < EnergySlider sliderChangeCallback={onSliderChange}/>

        <label className="vibe-form__form-label">Positivity: </label>
        < PositivitySlider sliderChangeCallback={onSliderChange}/>

        <label className="vibe-form__form-label">Popularity: </label>
        < PopularitySlider sliderChangeCallback={onSliderChange}/>

        <input className="vibe-form__form-button"
          type="submit"
          value="Create Playlist"
        />
        </form>

    </div>
  );
}

export default VibeForm;