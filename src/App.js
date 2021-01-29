import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Header from './Components/Header/Header';
import Moviecard from './Components/Moviecard/Moviecard';
import Popular from './Pages/Popular/Popular';
import Search from './Pages/Search/Search';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Carousel from './Components/CarouselP/CarouselP';
import Footer from './Components/Footer/Footer';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import TopRated from './Pages/TopRated/TopRated';
import Upcoming from './Pages/Upcoming/Upcoming';
import CarouselG from './Components/CarouselG/CarouselG';
import Browse from './Pages/Browse/Browse';

function App() {
  return (
    <Router basename="/Cinematic-app">
      <div className="App">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/toprated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/" component={Home} />
          <Route>
            <Error/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
