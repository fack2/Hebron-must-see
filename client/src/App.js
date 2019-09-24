import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Places from './components/Places'
import Guides from './components/Guides'
import OnePlace from './components/OnePlace'
import OneGuide from './components/OneGuide'
import Login from './components/SharedComponents/Login'
import Signup from './components/SharedComponents/Signup'
import NavBar from './components/SharedComponents/navbar'
import arabicListWords from './components/arabicListWords'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    listOfPlaces: [],
    listOfGuides: []
  }

  componentDidMount() {
    axios.get(`/api/places`).then(({ data }) => {
      this.setState({ listOfPlaces: data })
    })

    axios.get('/api/guides').then(({ data }) => {
      this.setState({ listOfGuides: data })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/places"
              render={() => <Places listOfItems={this.state.listOfPlaces} />}
            />
            <Route
              exact
              path="/guides"
              render={() => <Guides listOfItems={this.state.listOfGuides} />}
            />
            <Route
              exact
              path="/places/:id"
              render={props => (
                <OnePlace
                  title="Props through render"
                  place={this.state.listOfPlaces[props.match.params.id - 1]}
                />
              )}
            />
            <Route
              exact
              path="/guides/:id"
              render={props => (
                <OneGuide
                  title="Props through render"
                  guide={this.state.listOfGuides[props.match.params.id - 1]}
                />
              )}
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/arabic-words" component={arabicListWords} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
