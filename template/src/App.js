import React, { useState } from 'react'
import {
	Button,
	createMuiTheme,
	CssBaseline,
	makeStyles,
	ThemeProvider,
	Typography,
	useMediaQuery,
} from '@material-ui/core'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import logo from './logo.svg'
import store from './store'
import { useStyles } from './theme'
import { getMode, setMode } from './actions/darkModeActions'

function App() {
	const [darkMode, setDarkMode] = useState(getMode())
	console.log(darkMode)

	const classes = useStyles()

	const localClasses = useLocalStyles()

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
		setMode(!darkMode)
		// window.location.reload()
	}

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: darkMode ? 'dark' : 'light',
				},
			}),
		[darkMode]
	)

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Switch>
						<Route exact path='/'>
							<div className={classes.centerizer}>
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
									<Button
										className={localClasses.button}
										onClick={toggleDarkMode}
										variant='contained'
									>
										Toggle Dark Mode
									</Button>
								</header>
							</div>
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	)
}

const useLocalStyles = makeStyles(theme => ({
	appHeader: {
		alignItems: 'center',
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
	button: {
		margin: theme.spacing(2),
	},
	devLink: {
		color: 'inherit',
	},
}))

export default App
