import React from 'react'
import { makeStyles, Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import logo from './logo.svg'
import store from './store'
import { useStyles } from './theme'

function App() {
	const classes = useStyles()
	const localClasses = useLocalStyles()
	return (
		<Provider store={store}>
			<Paper elevation={0} className={classes.root}>
				<Router>
					<Switch>
						<Route exact path='/'>
							<div className={localClasses.app + ' ' + classes.centerizer}>
								<header className={localClasses.appHeader}>
									<img
										alt='logo'
										src={logo}
										className={
											useMediaQuery('(prefers-reduced-motion: no-preference)')
												? localClasses.appLogo + ' ' + localClasses.appLogoAnim
												: localClasses.appLogo
										}
									/>
									<Typography component='p'>
										Edit <code>src/App.js</code> and save to reload.
									</Typography>
									<Typography component='p'>
										<a
											className={localClasses.appLink}
											href='https://reactjs.org'
											target='_blank'
											rel='noopener noreferrer'
										>
											Learn React
										</a>
									</Typography>
									<Typography component='p'>
										<a
											className={localClasses.appLink}
											href='https://github.com/jagannathBhat/cra-template-rrm'
											target='_blank'
											rel='noopener noreferrer'
										>
											About Template
										</a>
									</Typography>
									<Typography component='p'>
										Template by Jagannath Bhat (
										<a
											className={localClasses.devLink}
											href='https://bhat.dev'
											target='_blank'
											rel='noopener noreferrer'
										>
											bhat.dev
										</a>
										)
									</Typography>
								</header>
							</div>
						</Route>
					</Switch>
				</Router>
			</Paper>
		</Provider>
	)
}

const useLocalStyles = makeStyles(theme => ({
	app: {
		backgroundColor: '#282c34',
	},
	appHeader: {
		alignItems: 'center',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		fontSize: 'calc(10px + 2vmin)',
		justifyContent: 'center',
		minHeight: '100vh',
	},
	appLink: {
		color: '#61dafb',
	},
	appLogo: {
		height: '40vmin',
		pointerEvents: 'none',
	},
	appLogoAnim: {
		animation: 'App-logo-spin infinite 20s linear',
	},
	devLink: {
		color: 'inherit',
	},
}))

export default App
