import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AddTournament from '@/Pages/AddTournament'
import Home from '@/Pages/Home'
import './Theme/reset.scss'
import './Theme/global.scss'
import { ToastrProvider } from '@/Context/ToastrProvider'
import { GlobalStateProvider } from '@/Context/GlobalStateProvider'
import ToastrList from '@/Components/ToastrList'
import { ADD_TOURNAMENT, HOME } from './Constants/routePaths'

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStateProvider>
          <ToastrProvider>
            <ToastrList />
            <Switch>
              <Route path={ADD_TOURNAMENT}>
                <AddTournament />
              </Route>
              <Route path={HOME}>
                <Home />
              </Route>
            </Switch>
          </ToastrProvider>
        </GlobalStateProvider>
      </div>
    </Router>
  )
}

export default App
