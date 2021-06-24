import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AddTournament from '@/Pages/AddTournament'
import Home from '@/Pages/Home'
import './Theme/reset.scss'
import './Theme/global.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/add">
            <AddTournament />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
