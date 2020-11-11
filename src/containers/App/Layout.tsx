import React from 'react'
import { Container } from '@material-ui/core'
// import Footer from 'src/components/Footer'
import Header from '../../components/Header'
import { getThemeMode, toggleThemeMode } from '../../utils/common'
import { ThemeProvider } from '@material-ui/core/styles'
import themes from '../../themes'

const Layout: React.FC = (props) => {
	const [isLightTheme, setThemeMode] = React.useState(getThemeMode)
	if (isLightTheme === null) {
		toggleThemeMode()
	}

	const changeThemeMode = () => {
		setThemeMode(!isLightTheme)
		toggleThemeMode()
	}

	return (
		<>
			<ThemeProvider theme={isLightTheme ? themes.light : themes.dark}>
				<Header onChangeThemeMode={changeThemeMode} />
				<Container>{props.children as React.ReactChild}</Container>
				{/*<Footer />*/}
			</ThemeProvider>
		</>
	)
}

export default Layout
