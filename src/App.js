import './App.css';

import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

import requests from "./requests";

const App = () => {
    return (
      <div className="App">
        <Header />
        <Banner endParam={requests.fetchNetflixOriginals} />
        <Row title="Netflix originals" endParam={requests.fetchNetflixOriginals} topRow={true}/>
        <Row title="Trending" endParam={requests.fetchTrending}/>
        <Row title="Top rated" endParam={requests.fetchTopRated}/>
        <Row title="Action Movies" endParam={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" endParam={requests.fetchComedyMovies}/>
        <Row title="Romance Movies" endParam={requests.fetchRomanceMovies}/>
        <Row title="Horror Movies" endParam={requests.fetchHorrorMovies}/>
        <Row title="Documentaries" endParam={requests.fetchDocumentaries}/>

      </div>
    );
}

export default App;
