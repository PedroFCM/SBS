import React, { useState } from 'react';
import './Css/Genre.css';
import axios from 'axios';
import CustomizedRatings from "./components/Rate";
import { ReactComponent as Logo } from './logo.svg';
import Footer from "./components/Footer";



function Genre() {
  const [musicas, setMusicas] = useState([])
  const handleClick = async function handleClick(e) {
    const params = { genre: e }
    await axios.get('http://localhost:5000/genrebuttons', { params })
      .then(res => {
        let musicas = JSON.parse(res.data.list).data
        setMusicas(musicas)
      });
  }

  return (
    <div className="Genre">
      <header className="Genre-header">
      <Logo className="Logo" />
      <div className="HeaderText"> <p>Indica-nos uma género que gostes e sugerimos-te o que ouvir </p>   </div>
        <div className="btn-group">
          <button onClick={e => handleClick("Blues")} type="button" className="btn btn-danger"> Blues </button> 
          <button onClick={e => handleClick("Country")} type="button" className="btn btn-danger "> Country </button>
          <button onClick={e => handleClick("Eletronic/Dance")} type="button" className="btn btn-danger "> Eletronic/Dance </button>
          <button onClick={e => handleClick("Indie")} type="button" className="btn btn-danger "> Indie </button>
          <button onClick={e => handleClick("Jazz")} type="button" className="btn btn-danger "> Jazz </button>
          <button onClick={e => handleClick("Metal")} type="button" className="btn btn-danger "> Metal</button>
          <button onClick={e => handleClick("Pop")} type="button" className="btn btn-danger "> Pop </button>
          <button onClick={e => handleClick("Punk")} type="button" className="btn btn-danger "> Punk </button>
          <button onClick={e => handleClick("Rap/Hip hop")} type="button" className="btn btn-danger "> Rap/Hip-Hop</button>
          <button onClick={e => handleClick("Rock")} type="button" className="btn btn-danger "> Rock </button>
          <button onClick={e => handleClick("Soul")} type="button" className="btn btn-danger "> Soul </button>
          <button onClick={e => handleClick("Other")} type="button" className="btn btn-danger "> Other </button>
        </div>

      <div className="Music-List">
        <p></p>
      <ol>
          {musicas.map((m) => 
            <li> {m[0]} - {m[1]}  </li> 
          )}
        </ol>
      </div>
      {<CustomizedRatings />}
      </header>

      <Footer />
    </div>
  );


}
export default Genre;