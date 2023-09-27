
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';
// import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row isPoster={true} title="NetFlix Orginals" fetchUrl={requests.fetchNetflixOriginals}></Row>
    <Row title="Trending In India" fetchUrl={requests.fetchTrending}></Row>
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}></Row>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
