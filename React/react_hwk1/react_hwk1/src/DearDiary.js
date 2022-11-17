import React from "react";

function DearDiary() {
  return (
    <>
      <div>
        <a href="/webpages/index.html"> Home </a>
        <a href="/webpages/dearDiary.html"> Dear Diary </a>
        <a href="/webpages/localStorage.html"> Facts & Places </a>
        <a href="/webpages/mapGoogle.html"> Fun Map </a>
        <a href="https://github.com/SICelineChan"> Github </a>

        <h1>Dear Diary</h1>
        <p>A place for memories!</p>
        <button>Dark Mode On</button>
        <input id="continentAdd" type="text" value="" placeholder="continent" />
        <input id="countryAdd" type="text" value="" placeholder="country" />
        <input id="cityAdd" type="text" value="" placeholder="city" />
        <input
          id="dateOftravelAdd"
          type="date"
          value="2022-01-10"
          min="2000-01-01"
          max="2050-12-31"
          placeholder="dateOftravel"
        />
        <button id="buttonAdd" class="button is-danger is-light is-small">
          Add!
        </button>

        <p class="meName">Osaka Castle</p>

        {/* <img src="/images/llama.png" alt="dog"> */}

        <p>
          Osaka Castle in Japan. I didn't go inside, because all the tour groups
          were like flies! But the courtyard and the river have much better
          views!
        </p>
      </div>
    </>
  );
}
export default DearDiary;
