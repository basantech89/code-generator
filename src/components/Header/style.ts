import { makeStyles } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core'

export const useAppHeaderStyles = makeStyles(
	(theme) =>
		createStyles({
			toolbar: {
				justifyContent: 'space-between'
			},
			title: {
				letterSpacing: 0.7,
				flexGrow: 1,
				color: '#fff',
				textDecoration: 'none',
				[theme.breakpoints.up('sm')]: {
					display: 'block'
				}
			}
		}),
	{
		name: 'AppHeader'
	}
)
