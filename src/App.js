import './App.css';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/request";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Banner/>
            <Row title="NETFLIX ORIGINAL"
                 id="NO"
                 fetchUrl={requests.fetchNetflixOriginals}
                 isLargeRow
            />
            <Row title="TrendingNow" id="TN" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}/>

        </div>
    );
}

export default App;
