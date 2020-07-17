import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function VibeForm() {

  const [userInput, setUserInput] = useState({
    artist_inspiration: ''
  });

  const onInputChange = (event) => {
    const newUserInput = {
      ...userInput,
    }

    newUserInput[event.target.name] = event.target.value;

    setUserInput(newUserInput);
    console.log(userInput);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    // props.addCardCallback(newCard);

    // clear user input
    setUserInput({
      artist_inspiration: ''
    });

  }


  return (
    <div className="vibe-form">

      <form className="vibe-form__form" onSubmit={onFormSubmit}>
          
          <label className="vibe-form__form-label">Enter an Artist to Inspire your Playlist : </label>
          <input className="vibe-form__form-textarea"
                id="artist_inspiration"
                name="artist_inspiration"
                onChange={onInputChange}
                value={userInput.artist_inspiration}
          />

          <input className="vibe-form__form-button"
          type="submit"
          value="Create Playlist"
        />
        </form>

    </div>
  );
}

export default VibeForm;