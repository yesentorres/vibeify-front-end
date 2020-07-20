import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function VibeForm(props) {

  const [userInput, setUserInput] = useState({
    genre_inspiration: ''
  });

  const [genreList, setGenreList] = useState([]);

  useEffect ( () => {
    // local: http://localhost:5000/get-genres
    // deployed: https://vibeify-back-end.herokuapp.com/get-genres
    axios.get('https://vibeify-back-end.herokuapp.com/get-genres')
    .then( (response) => {
      console.log(response);

      const retrievedGenres = [...response.data.genres]
      setGenreList(retrievedGenres);
    })
    .catch( (error) => {
      console.log(error);
    });
  }, []);

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
    axios.post('https://vibeify-back-end.herokuapp.com/recommendation-generator', { params: userInput })
    .then((response) => {
      console.log(response);
      props.onSubmitCallback(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

    // clear user input
    setUserInput({
      genre_inspiration: ''
    });

  }

  console.log(genreList);

  return (
    <div className="vibe-form">

      <form className="vibe-form__form" onSubmit={onFormSubmit}>

        <label className="vibe-form__form-label">Pick Genre : </label>

        <select className="vibe-form__form-select"
          id="genre_inspiration"
          name="genre_inspiration"
          onChange={onInputChange}
          value={userInput.genre_inspiration}
        >
          {genreList.map(genreName => <option value={genreName} key={genreName}> {genreName} </option>)}
        </select>

        <input className="vibe-form__form-button"
          type="submit"
          value="Create Playlist"
        />
        </form>

    </div>
  );
}

export default VibeForm;