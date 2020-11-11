import { createMuiTheme } from '@material-ui/core'
import { IThemeOptions } from './types'
import colors from './colors'

const extended = {
	Header: {
		background: `linear-gradient(to top, ${colors.white.medium} 0%, ${colors.white.light} 100%)`,
		border: `1px solid ${colors.blue.light}`
	}
}

const theme = createMuiTheme({
	name: 'dark',
	palette: {
		type: 'dark'
	},
	cfg: extended
} as IThemeOptions)

export default theme
