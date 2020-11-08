import * as React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { useAppHeaderStyles } from './style'
import { Link } from '@reach/router'

const AppHeader = () => {
	const classes = useAppHeaderStyles()

	return (
		<AppBar position={'static'} elevation={0}>
			<Toolbar className={classes.toolbar}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Link to='/' className={classes.title}>
						Code Generator
					</Link>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default AppHeader
