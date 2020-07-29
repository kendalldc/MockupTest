import React from 'react';
import Shop from './Components /Shop'
import Stores from './Components /Stores'
import  Read from './Components /Read'
import  Search from './Components /Search'
import  Login from './Components /Login'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


// function App() {
//   return (
//     <div className="App">
//      <h1>Kendall </h1>
//     </div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {


    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/Shop'>Shop</Link>
              </li>
              <li>
                <Link to='/Read'>Read</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/Shop' component={Shop} />
            <Route path='/Read' component={Read} />
            <Route path='/Stores' component={Stores} />
            <Route path='/Search' component={Search} />
            <Route path='/Login' component={Login} />
          </Switch>

        </div>

      </Router>

    );
  }
}


export default App;
