import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import BrowseProjects from './Components/BrowseProjects/BrowseProjects';
import CreateProject from './Components/CreateProject/CreateProject';
import LogIn from './Components/LogIn/LogIn';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';

function App() {
 const [logIn, setLogIn] = useState(localStorage.getItem('token') ? true:false)
	return (
		<div className='App'>
			<div className='page-containers'>
				<div className='content-wrap'>
					<Router>
						<Nav />
						<Header />
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/projects' exact component={BrowseProjects} />
							<Route path='/create' exact component={CreateProject} />
							<Route
								path='/login'
								exact
								render={() => <LogIn setLogIn={setLogIn} />}
							/>
							<Route
								path='/signup'
								exact
								render={() => <SignUp />}
							/>
						</Switch>
					</Router>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
