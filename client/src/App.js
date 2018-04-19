import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Saved from './pages/saved'
import './style.css'

const App = () => (
	<Router>
		<div>
			<Navbar/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/saved" component={Saved} />
			</Switch>
		</div>
	</Router>
)

export default App;