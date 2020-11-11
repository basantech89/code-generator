import * as React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { useAppHeaderStyles } from './style'
import { Link } from '@reach/router'
import LightThemeIcon from '../../assets/icons/lightThemeIcon'
import DarkThemeIcon from '../../assets/icons/darkThemeIcon'

declare interface IAppHeaderProps {
	onChangeThemeMode: () => void
}

const AppHeader = (props: IAppHeaderProps) => {
	const classes = useAppHeaderStyles()

	return (
		<AppBar position={'static'} elevation={0}>
			<Toolbar className={classes.toolbar}>
				<Link to='/' className={classes.title}>
					Code Generator
				</Link>
				<Button
					className={classes.themeToggleButton}
					onClick={props.onChangeThemeMode}
				>
					<LightThemeIcon />
					<DarkThemeIcon />
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default AppHeader
